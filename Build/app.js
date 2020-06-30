"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
// app setup
let app = express_1.default();
// middlewares
app.use(express_1.default.static('Public'));
// start server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`server listening to port ${PORT}`));
// socket setup
const io = socket_io_1.default(server);
io.on("connection", (socket) => {
    console.log(`socket connection established. id: ${socket.id}`);
    socket.on("chat", (data) => {
        io.sockets.emit("chat", data);
    });
    socket.on("typing", (data) => {
        socket.broadcast.emit('typing', data);
    });
});
