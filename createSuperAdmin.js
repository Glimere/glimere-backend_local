require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Auth = require('./models/authModel');

const createSuperAdmin = async () => {

    try {
        const mongoUri = process.env.MONGO_URL;
        
        if (!mongoUri) {
            throw new Error('MONGO_URL is not defined in the environment variables.');
        }

        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const hashedPassword = await bcrypt.hash('Glimere.196500', 10); // Use a secure password
        const superAdmin = new Auth({
            username: 'Admin',
            email: 'josephakinwole@glimere.com',
            password: hashedPassword,
            phone_number: 7036857945,
            role: 'super_admin',
        });

        await superAdmin.save();
        console.log('Super Admin created successfully');
    } catch (error) {
        console.error('Error creating Super Admin:', error);
    } finally {
        mongoose.connection.close();
    }
};

createSuperAdmin();
