const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { SECRET_KEY } = require('../../constants');

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { id: admin._id, email: admin.email },
            SECRET_KEY,
            { expiresIn: '1d' }
        );

        let profileImageBase64 = null;
        if (admin.profileImage && admin.profileImage.data) {
            profileImageBase64 = `data:${admin.profileImage.contentType};base64,${admin.profileImage.data.toString('base64')}`;
        }

        res.status(200).json({
            message: 'Login successful',
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                speciality: admin.speciality,
                email: admin.email,
                profileImage: profileImageBase64,
            },
        });
    } catch (error) {
        console.error('Error in loginAdmin:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};


module.exports = { loginAdmin };