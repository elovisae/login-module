const mongoose = require('mongoose');
const Schema    = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    }
});

const User  = mongoose.model('User', userSchema)
module.exports = User;