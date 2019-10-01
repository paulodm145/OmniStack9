/**NOME DO MODEL: User.js -> inicia com letra maiuscula e termina no singular */
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String
});

module.exports = mongoose.model('User', UserSchema);