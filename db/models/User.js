var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema(
    {
        username: mongoose.Schema.Types.String,
        hash: mongoose.Schema.Types.String,
        salt: mongoose.Schema.Types.String,
    },
    { timestamps: true }
);

UserSchema.methods.generateSalt = function() {
    return bcrypt.genSaltSync(8);
};

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, this.salt, null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);
