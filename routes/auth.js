var express = require('express');
var router = express.Router();
const passport = require('passport');

router.post('/signin', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }

        if (user) {
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                return res.json({
                    username: user.username
                });
            });
        } else {
            res.status(401);
            res.json(info);
        }
    })(req, res, next);
});

router.post('/logout', function(req, res, next) {
    res.end('logged out');
});

router.post('/signup', function(req, res, next) {
    res.end('registered');
});

module.exports = router;
