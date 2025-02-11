const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../constants');

const authenticateAdmin = (req, res, next) => {
    let tok = req.header('Authorization');
    if (!tok) {
        tok = req.header('Authorization')?.split(' ')[1];
    }
    if(!tok){
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    const token = tok;

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.admin = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authenticateAdmin;
