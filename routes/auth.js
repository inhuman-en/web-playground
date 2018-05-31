var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/signin', function(req, res, next) {
    res.end('logged in');
});

router.post('/logout', function(req, res, next) {
    res.end('logged out');
});

router.post('/signup', function(req, res, next) {
    res.end('registered');
});

module.exports = router;
