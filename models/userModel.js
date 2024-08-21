const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auth',
        required: true
    },
    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_number: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        street: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        state: {
            type: String,
            required: false
        },
        postal_code: {
            type: String,
            required: false
        },
        country: {
            type: String,
            required: false
        }
    },
    profile_image: {
        type: String, // URL to the profile image
        default: null
    },
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Apparel'
    }],
    order_history: [{
        order_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        },
        order_date: {
            type: Date,
            required: true
        },
        total_amount: {
            type: Number,
            required: true
        },
        order_status: {
            type: String,
            enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
            default: 'Pending'
        }
    }],
    cart: [{
        item_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Apparel'
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    preferred_payment_method: {
        type: String,
        enum: ['Credit Card', 'PayPal', 'Bank Transfer', 'Cryptocurrency'],
        default: 'Credit Card'
    },
    ar_models: [{
        model_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ARModel'
        },
        last_accessed: {
            type: Date,
            default: Date.now
        }
    }],
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
