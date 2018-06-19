const LocalStrategy = require('passport-local').Strategy;
const User = require('../../db');

module.exports = new LocalStrategy(function(username, password, done) {
    User.findOne({ username }, function(err, user) {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false, { message: 'Incorrect login or password' });
        }

        if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect login or password' });
        }

        console.log(`authenticating ${username} successful`, user);

        return done(null, user);
    });
});
