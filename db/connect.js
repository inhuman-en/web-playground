const mongoose = require('mongoose');
const cfg = require('../serverconfig');
// TODO: connection string as an env variable
module.exports = function() {
    mongoose.connect(
        cfg.DB_CONNECTION_STRING,
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
