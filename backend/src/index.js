const express = require('express');
const http = require("http");
const cors = require("cors");
const socketIo  = require('socket.io');

const app = express();
const server = http.createServer(app);

const origin = 'http://localhost:3000'; // frontend url

// IO with CORS
const io = socketIo(server, {
	cors: {
		origin,
	},
});

// Enable CORS for localhost 3000 origin
app.use(
	cors({
		origin,
	})
);




const getRandomColor = () => {
    const colors = [
        "red", "blue", "yellow", "green", "orange", "purple", "pink", "brown",
        "black", "white", "gray", "cyan", "magenta", "lime", "teal", "navy",
        "maroon", "olive", "gold", "silver", "violet", "indigo", "turquoise",
        "beige", "coral"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}


const peers = new Map();
io.on('connection', (socket) => {
	console.log(`User connected ${socket.id}`);

	// handle join
	socket.on('join', (data, cb) => {
		console.log(`User joined room and got this payload: ${JSON.stringify(data)}`);

		// leave all rooms except room with yourself
		socket.rooms.forEach(room => {
			if (room !== socket.id) {
				socket.leave(room);
			}
		});

		// join room specified at data.endpoint
		socket.join(data.endpoint);

		// save connection to peers
		peers.set(socket.id, { 
			color: getRandomColor(),
			room: data.endpoint,
			x: null,
			y: null
		});

		// success
		cb(true);
	})


	// throttled client side mouseUpdate
	socket.on('mouseMove', (data) => {
		// console.log('mouse moved udate recieevd');

		// find the peer
		const peer = peers.get(socket.id);
		console.log(peer);
		if (!peer) {
			console.error('This connection was not saved in memory :(');
		}

		// update memory
		const updated = { ...peer, x: data.x, y: data.y };
		peers.set(socket.id, updated);

		// send an update to all the friends
		console.log(`sending mouseUpdate to room ${peer.room} with payload ${JSON.stringify(data)}`);
		socket.to(peer.room).emit('mouseUpdate', updated);
	});

	socket.on('disconnect', (data) => {
		console.log(`User ${socket.id} disconnected`);

		io.to(data.endpoint).emit('userLeft');
	});
});

server.listen(3001, '127.0.0.1', () => {
	console.log('Server listening on port 3001');
});
