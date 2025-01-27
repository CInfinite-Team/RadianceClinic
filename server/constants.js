require('dotenv').config();

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;
const DB_NAME = process.env.DB_NAME;
const SECRET_KEY = process.env.SECRET_KEY

module.exports = {
    PORT,DB_NAME,MONGODB_URL,SECRET_KEY
};