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
    brand_owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    apparels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Apparel'
    }],
    description: {
        type: String,
        required: true
    },
    logo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Upload',
        required: false
    },
    coverImage: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Upload', 
        required: false 
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
    isOfficial: {
        type: Boolean,
        default: false
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
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Brand', brandSchema);