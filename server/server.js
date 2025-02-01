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
    app.use(express.json());

    // Enable CORS
    const corsOptions = {
        origin: '*',  // Allow requests from any origin
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    };

    // Routes
    app.use('/api/forms', formRouter); // User routes
    app.use('/api/admin', adminRouter); // Admin routes
    app.use('/api/user', userRouter); // User routes
  
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
        connectDB();
    });
}