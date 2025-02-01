const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT } = require('./constants');
const formRouter = require('./src/routes/forms');
const adminRouter = require('./src/routes/adminRoutes');
const userRouter = require('./src/routes/userRoutes');

const connectDB = require('./src/db/connection');

if (require.main === module) {
    const app = express();

    // CORS options to allow all origins (or you can specify your frontend URL)
    const corsOptions = {
        origin: '*', // Allow all origins
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    };

    // Enable CORS
    app.use(cors(corsOptions)); // Apply CORS to all routes
    app.options('*', cors(corsOptions)); // Handle preflight requests

    // Routes
    app.use('/api/forms', formRouter); // User routes
    app.use('/api/admin', adminRouter); // Admin routes
    app.use('/api/user', userRouter); // User routes
 
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
        connectDB();
    });
}
