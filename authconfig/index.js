const localStrategy = require('./strategies/local');
const { serializeUser, deserializeUser } = require('./session');

exports.init = function(passport) {
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);
    passport.use(localStrategy);
};
