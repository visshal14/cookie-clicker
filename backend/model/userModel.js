const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    counter: { type: Number, default: 0 },
    prizesWon: { type: Number, default: 0 },
});

const User = mongoose.model('User', userSchema);

module.exports = User;