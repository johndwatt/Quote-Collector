const mongoose = require('mongoose');
require("dotenv").config();

const connectionStr = 'mongodb://localhost:27017/quote-collector' || process.env.MONGODB_URI;

mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => {
    console.log('\x1B[42m%s\x1b[0m', `=== MongoDB connected ===`);
});

mongoose.connection.on('error', (error) => {
    console.log('\x1b[41m%s\x1b[0m', '=== MongoDB connection error ===', error)
});
  
mongoose.connection.on('disconnected', () => {
    console.log('\x1B[44m%s\x1b[0m', '=== MongoDB disconnected ===');
});