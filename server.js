// Initialize
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const env = require('dotenv');

// Configuration
env.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(require("./utils/logger"));

// API routes
app.use("/", routes.quote);

// Connection string
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}!`);
});