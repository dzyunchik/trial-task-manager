var path = require('path');

module.exports = {
    system: {
        webpackConfig: require('../webpack.config'),
        webpackDevMiddlewareOptions: {
            publicPath: '/js'
        },
        staticDir: 'public',
        port: 8201,
        mongodb: 'mongodb://localhost/test'
    }
};