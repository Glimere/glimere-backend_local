const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'admin', 'seller'],
    default: 'user'
  }
},
{ timestamps: true }
);

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;
