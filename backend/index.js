const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const PORT = 7001;

// Use CORS for Express
app.use(express.json());
app.use(cors());

// Initialize HTTP server
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Initialize Socket.IO with CORS options
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000', // Allow requests from this origin
        methods: ['GET', 'POST'], // Specify allowed HTTP methods
        allowedHeaders: ['my-custom-header', 'Content-Type'], // Specify allowed headers
        credentials: true // Enable credentials if needed
    }
});

// Listen for new connections
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    console.log(`Number of connected clients: ${io.sockets.sockets.size}`);
   

    // Listen for messages from the client
    socket.on('chat message', (msg) => {
        console.log('Message received:', msg);
        // Emit the message to all connected clients
       socket.broadcast.emit('chat message', msg);
       
    });

    // Handle disconnection
    socket.on('disconnect', () => {
       
        console.log('User disconnected:', socket.id);
       
    });
});



