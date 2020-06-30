"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// app setup
let app = express_1.default();
// middlewares
app.use(express_1.default.static('Public'));
// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server listening to port ${PORT}`));
