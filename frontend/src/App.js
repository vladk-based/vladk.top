import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const App = () => {
  const [socket, setSocket] = useState(null);
  const [cursorPositions, setCursorPositions] = useState({});

  useEffect(() => {
    const newSocket = socketIOClient('http://localhost:3001');
    setSocket(newSocket);

    newSocket.on('cursorPosition', (data) => {
      setCursorPositions(prev => ({ ...prev, [data.userId]: data.position }));
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleMouseMove = (e) => {
    if (socket) {
      const position = { x: e.clientX, y: e.clientY };
      socket.emit('cursorPosition', { userId: 'me', position });
    }
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {/* Your resume content here */}
      {Object.keys(cursorPositions).map(userId => {
        if (userId !== 'me') {
          const { x, y } = cursorPositions[userId];
          return <div key={userId} style={{ position: 'absolute', left: x, top: y, width: 10, height: 10, background: 'red' }}></div>;
        }
        return null;
      })}
    </div>
  );
};

export default App;