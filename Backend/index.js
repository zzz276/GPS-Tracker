import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
  console.log('Client connected');

  // Example: ESP32 sends GPS data here
  socket.on('gpsUpdate', data => {
    console.log('Received GPS:', data);
    io.emit('gpsUpdate', JSON.parse(data)); // broadcast to all clients
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
