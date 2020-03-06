const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
}, {
    timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;