var express = require('express');
var router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(
    new LocalStrategy(function(username, password, done) {

        if (username === 'admin' && password === '1') {
            return done(null, {
                username,
                password
            });
        } else {
            return done(null, false, { message: 'Incorrect login or password' });
        }
    })
);

router.post('/signin', function(req, res, next) {
    passport.authenticate('local', function(err, req, res) {
        if (err) {
            return next(err);
        }

        if (req.user) {
            res.json(user);
        } else {
            res.json(401);
        }
    });
});

router.post('/logout', function(req, res, next) {
    res.end('logged out');
});

router.post('/signup', function(req, res, next) {
    res.end('registered');
});

module.exports = router;
