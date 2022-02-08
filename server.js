// Initialize
const express = require("express");
const cors = require("cors");

// Config
const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// API routes

// Connection string
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}!`);
});