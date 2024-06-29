require('dotenv').config();

// Dependencies
const express = require('express');
// const compression = require('compression');
const rateLimit = require('express-rate-limit');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const helmet = require('helmet');

// Student Route
const studentRouter = require('./routes/students');

// Create the express app
const app = express();

// Middleware
app.use(helmet()); // Securing HTTP headers
app.use(bodyParser.json());
// app.use(compression);

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15minutes
    max: 20  // Limit each IP to 100 requests per window
});
app.use(limiter);

// Check for the connection to the database
async function runPing() {
    try {
        const client = await MongoClient.connect(process.env.DATABASE_URI);
        await client.db(process.env.DATABASE).command({ ping: 1 });
        console.log(client);
        console.log(`Ping Success`);
    }
    catch (error) {
        console.log(`Failed to Ping Error: ${error}`)
    }
    finally {
        
        console.log(`Connection Closed successfully`);
    }
}


// Creating the connection to the database
async function initializeApp() {
    try {
        const client = await MongoClient.connect(process.env.DATABASE_URI);
        console.log(`Connected to Database`);
        // Give the database into the route
        app.use('/students', studentRouter(client));
    }
    catch (error) {
        console.log(error);
    }
}

setTimeout(() => {
    initializeApp();
}, 500);
// runPing();

module.exports = app;