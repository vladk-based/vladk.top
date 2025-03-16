import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
import throttle from 'lodash/throttle';
import ReactDOM from 'react-dom'

import Navigation from './Navigation';
import About from './pages/About';
import Work from './pages/Work';
import Projects from './pages/Projects';


const Cursor = ({ x, y, color }) => {
	return (
		<div
		style={{
			position: 'absolute',
			top: y,
			left: x,
			width: '20px',
			height: '20px',
			pointerEvents: 'none',
			transform: 'translate(-50%, -50%)',
			zIndex: 1000
		}}
		>
		<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill={color}
		stroke="black"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		>
		<path d="M3 3l6 16 4-7 7-4-17-5z" />
		</svg>
		</div>
	);
}

const Cursors = ({ cursors }) => {
	return ReactDOM.createPortal(
		<>
		{
			Object.entries(cursors).map(([id, cursor]) => (
				<Cursor key={id} x={cursor.x} y={cursor.y} color={cursor.color} />
			))
		}
		</>,
		document.body
	)
}

const App = () => {
	const [cursors, setCursors] = useState({});
	
	useEffect(() => {
		// remove sidebar
		document.body.style.overflow = "hidden";
		
		// socket connection
		const socket = io('http://localhost:3001');
		const endpoint = window.location.pathname || '/home';
		let connected = false;
		
		// join room and set connected
		socket.on('connect', () => {
			socket.emit('join', { endpoint }, (success) => {
				if (success) {
					connected = true;
				}
			});
		});
		
		// get mouse updates
		socket.on('mouseUpdate', (data) => {
			// console.log(`Got mouse update with payload: ${JSON.stringify(data)}`);
			setCursors(prev => ({
				...prev,
				[data.id]: { x: data.x * window.innerWidth, y: data.y * window.innerHeight, color: data.color }
			}));
		});
			
		// get user leave events
		socket.on('userLeft', (id) => {
			setCursors(prev => {
				const newCursors = { ...prev }
				delete newCursors[id];
				return newCursors;
			})
		});
		
		// update backend with mouse movements
		const handleMouseMove = throttle(event => {
			if (connected) {
				const x = event.pageX;
				const y = event.pageY;

				console.log(`normalized move coords: ${event.pageX / window.innerWidth} and ${event.pageY / window.innerHeight}`);

				socket.emit('mouseMove', { x: x / window.innerWidth, y: y / window.innerHeight });
			}
		}, 50);
		
		// event listener for mouse updates
		document.addEventListener('mousemove', handleMouseMove);
		
		// clean up on unmount
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			handleMouseMove.cancel();
			socket.disconnect();
		};
	}, []);
	
	
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/work" element={<Work />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/" element={<About />} />
			</Routes>
			<Cursors cursors={cursors}/>
		</Router>
	);
};
	
export default App;
	