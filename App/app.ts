import express from "express";

// app setup
let app = express();

// middlewares
app.use(express.static('Public'));

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server listening to port ${PORT}`));