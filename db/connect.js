const mongoose = require('mongoose');
// TODO: connection string as an env variable
mongoose.connect('mongodb://localhost:27017/wpl');

if (process.env.NODE_ENV !== 'production') {
    require('./seed');
}
