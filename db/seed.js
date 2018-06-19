const bcrypt = require('bcrypt-nodejs');
let User = require('./models/User');

let fakeUsers = [
    { username: 'admin', password: 'admin' },
    { username: 'john', password: 'pwd' },
    { username: 'jack', password: 'pwd2' }
].map(user => {
    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(user.password, salt, null);

    return { username, salt, hash };
});

User.remove({}, function(err) {
    if (err) {
        console.error('[DB] users cleanup failed', err);
        throw err;
    } else {
        User.create(fakeUsers, function(err) {
            if (err) {
                console.error('[DB] users seed failed', err);
                throw err;
            } else {
                console.log('[DB] users seed successful');
            }
        });
    }
});
