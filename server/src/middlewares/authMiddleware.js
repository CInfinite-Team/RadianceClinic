const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../constants');

const authenticateAdmin = (req, res, next) => {
    const authHeader = req.header('Authorization');
    console.log('authHeader:', authHeader);
    if (!authHeader) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;
    console.log('token:', token);
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.admin = decoded;
        next();
    } catch (error) {
        console.error('Token verification failed:', error.message);
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authenticateAdmin;
