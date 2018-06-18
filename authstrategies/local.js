const LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy(function(username, password, done) {
    if (username === 'admin' && password === '1') {
        return done(null, {
            username,
            password
        });
    } else {
        return done(null, false, { message: 'Incorrect login or password' });
    }
});
