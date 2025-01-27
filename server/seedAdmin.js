const Admin = require('./src/models/Admin');
const connectDB = require('./src/db/connection');
const bcrypt = require('bcrypt');

const seedAdmin = async () => {
    try {
        await connectDB();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('admin123', salt);

        const admin = new Admin({
            email: 'admin@clinic.com',
            password: hashedPassword,
        });

        await admin.save();
        console.log('Admin user seeded successfully!');
    } catch (error) {
        console.error('Error seeding admin user:', error.message);
    } finally {
        process.exit(0);
    }
};

seedAdmin();
