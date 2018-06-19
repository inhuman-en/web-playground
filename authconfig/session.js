const User = require('../db');

exports.serializeUser = function(user, done) {
    done(null, user.username);
};

exports.deserializeUser = function(username, done) {
    User.findOne({username}, function(err, user) {
        done(err, user);
    });
};
