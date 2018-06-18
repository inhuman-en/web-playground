var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        hash: String,
        salt: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
