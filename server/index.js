// Import from packages
const express = require('express');
const mongoose = require('mongoose');

// Import from another files
const authRouter = require("./routes/auth");

// INITIALIZATION
const app = express();
const PORT = 3000;
const password = "Ken15011995."
const DB = `mongodb+srv://kenny:${password}@cluster0.6oujk1d.mongodb.net/?retryWrites=true&w=majority`;

// Middleware
app.use(express.json());
app.use(authRouter);

// Database Connections
mongoose.set('strictQuery', false);

mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
}).catch((e) => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port: ${ PORT }`);
});