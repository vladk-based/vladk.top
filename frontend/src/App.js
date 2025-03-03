import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import throttle from 'lodash/throttle';
import styled from 'styled-components';
import ReactDOM from 'react-dom'

import Navigation from './Navigation';
import About from './About';


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

const Container = styled.section`
	overflow: hidden;
	scrollbar-width: none;
`


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
		console.log(`Got mouse update with payload: ${JSON.stringify(data)}`);
		setCursors(prev => ({ 
			...prev,
			[data.id]: { x: data.x, y: data.y, color: data.color }}));
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
			socket.emit('mouseMove', { x, y });
			// console.log('mouse moving update sent');
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
	<Container className="vladk.top">
		<Navigation />
		<About />
		<Cursors cursors={cursors}/>
	</Container>
  );
};

export default App;
