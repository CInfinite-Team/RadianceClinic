const mongoose = require('mongoose');
const { MONGODB_URL, DB_NAME } = require('../../constants');

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('Database connected successfully',DB_NAME);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
