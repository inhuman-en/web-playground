let User  = require('./models/User');

User.remove({}, function(err) {
    if (err) {
        console.error('[DB] users cleanup failed', err);
        throw err;
    }
});

User.create({ username: 'admin' }, function (err) {
    if (err) {
        console.error('[DB] users seed failed', err);
        throw err;
    } else {
        console.log('[DB] users seed successful');
    }
});
