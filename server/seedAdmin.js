const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const Admin = require('./src/models/Admin');
const connectDB = require('./src/db/connection');

const seedAdmin = async () => {
    try {
        await connectDB();

        // Check if admin already exists to prevent duplicate entries
        const existingAdmin = await Admin.findOne({ email: 'radianceclinicnagpur@gmail.com' });
        if (existingAdmin) {
            console.log('✅ Admin user already exists!');
            process.exit(0);
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('H0sp!tal@dm!n2025', salt);

        // Read the image file (ensure an image is in the same directory as this script)
        const imageFilename = 'Nitin-SHMFe31f.png'; // Change to your actual image filename
        const imagePath = path.join(__dirname, imageFilename);

        let imageData = null;
        let imageType = null;

        if (fs.existsSync(imagePath)) {
            imageData = fs.readFileSync(imagePath);
            const fileExt = path.extname(imageFilename).toLowerCase();

            // Determine MIME type based on file extension
            if (fileExt === '.jpg' || fileExt === '.jpeg') {
                imageType = 'image/jpeg';
            } else if (fileExt === '.png') {
                imageType = 'image/png';
            } else {
                throw new Error('❌ Invalid file format! Only JPG, JPEG, and PNG are allowed.');
            }
        } else {
            console.warn('⚠️ No image found! Skipping image upload.');
        }

        // Create admin entry
        const admin = new Admin({
            name: 'Nitin G Barde ',
            speciality: 'Dermatology', // Update as needed
            email: 'radianceclinicnagpur@gmail.com',
            password: hashedPassword,
            profileImage: imageData ? { data: imageData, contentType: imageType } : undefined, // Store image if available
        });

        await admin.save();
        console.log('✅ Admin user seeded successfully!');
    } catch (error) {
        console.error('❌ Error seeding admin user:', error.message);
    } finally {
        process.exit(0);
    }
};

seedAdmin();
