const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema(
    {
        ItemID:
            {
                type: String,
                required: true,
                unique: true,
                minlength: 4,
                trim: true,
            },
        ItemName:
            {
                Type: String,
                required: true,
                trim: true
            },
        Price:
            {
                Type: Number,
                trim: true
            },
        SellerId:
            {
                Type: String,
                trim: true
            },
        SaleNum:
            {
                Type: Number,
                trim: true

            }
    },

    {
        timestamps: true,
    });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;