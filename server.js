// Initialize
const express = require("express");
const cors = require("cors");
const env = require('dotenv');

// Config
env.config();
const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(require("./utils/logger"));

// API routes

// Connection string
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}!`);
});