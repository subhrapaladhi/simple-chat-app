// imports
import express from "express";
import socket from "socket.io";

// app setup
let app = express();

// middlewares
app.use(express.static('Public'));

// start server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`server listening to port ${PORT}`));

// socket setup
const io = socket(server);

io.on("connection", (socket) => {
    console.log(`socket connection established. id: ${socket.id}`)
})