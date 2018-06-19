let User  = require('./models/User');

User.remove({}, function() {});
User.create({ username: 'admin', email: 'superuser@test.com' }, function (err) {
    if (err) {
        console.error('[DB] users seed failed', err);
        throw err;
    } else {
        console.log('[DB] users seed successful');
    }
});
