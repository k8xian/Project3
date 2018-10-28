const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googleSchema = new Schema({
    username: {
        type: String,
        default: ""
    },
    googleId: {
        type: String,
        default: ""
    },
    gender: {
        type: String,
        default: ""
    },
    source: {
        type: String,
        default: ""
    },
    language: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    }

})

const GoogleUser = mongoose.model("google", googleSchema);

module.exports = GoogleUser;