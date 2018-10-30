const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const ItemSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    games:{
        type: Array,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);