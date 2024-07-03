const express = require('express');
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');
const path = require('path');

// Create express server
const server = express();

// Use CORS middleware
server.use(cors({
    origin: '*', // Allow all origins or specify your allowed origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
}));

// Middleware to set CORS headers
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins or specify your allowed origin
    res.header('Access-Control-Allow-Headers', '*'); // Adjust headers as needed
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE'); // Allow these methods
    next();
});

// Set up JSON server
const dbFilePath = path.join(__dirname, 'data', 'db.json');
const router = jsonServer.router(dbFilePath);

// Use JSON Server and authentication middleware
const middlewares = jsonServer.defaults();
const rules = auth.rewriter({
    products: 444,
    featured_products: 444,
    orders: 660,
    users: 600
});

// Use middlewares
server.use(rules);
server.use(auth);
server.use(middlewares);
server.use('/api', router); // Ensure all API routes are prefixed with /api
server.db = router.db;

// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
