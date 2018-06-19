module.exports = process.env.NODE_ENV !== 'production' ?
    require('./development'):
    require('./production');
