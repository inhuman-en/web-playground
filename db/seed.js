let User  = require('./models/User');

User.remove({}, function() {});
User.create({ username: 'admin', email: 'superuser@test.com' }, function (err) {
    if (err) {
        throw err;
    } else {
        console.log('users seed successful');
    }
});
