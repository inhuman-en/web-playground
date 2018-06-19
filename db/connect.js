const mongoose = require('mongoose');
// TODO: connection string as an env variable
module.exports = function() {
    mongoose.connect(
        'mongodb://localhost:27017/wpl',
        {},
        function(err) {
            if (err) {
                console.error('[DB] conneteion failed', err);
                throw err;
            }
        }
    );

    if (process.env.NODE_ENV !== 'production') {
        require('./seed');
    }
};
