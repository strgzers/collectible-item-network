const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        userID: // unique key for thse user database
            {
                type: String,
                required: true,
                unique: true,
                minlength: 3,
                trim: true,
            },
        password:
            {
                type: String,
                required: true,
                trim: true,
                minLength: 6, // password has to be at least six characters long
            },
        role:
            {
                type: String,
                required: true,
                trim: true,
            },
        shippingAddress:
            {
                trim: true,
                type: String,
                required: true,
            }
    },
    {
        timestamps: true,
    });

const User = mongoose.model('User', userSchema);

module.exports = User;