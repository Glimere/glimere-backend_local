const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactInfoSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { _id: false });

const brandSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    established: {
        type: Number,
        required: true
    },
    contactInfo: {
        type: contactInfoSchema,
        required: true
    },
    socialMediaLinks: {
        facebook: {
            type: String,
            required: false
        },
        twitter: {
            type: String,
            required: false
        },
        instagram: {
            type: String,
            required: false
        },
        linkedin: {
            type: String,
            required: false
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('Brand', brandSchema);