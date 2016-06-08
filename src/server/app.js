var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var path = require('path');

var isInDevMode = !!process.env.DEV;
var config = require('../../config/' + (isInDevMode ? 'dev.' : '') + 'config');

var systemConfig;
var app;
var webpackCompiler;

systemConfig = config.system;

app = express();

/*global process*/
// if in dev mode generate js with webpack
if (process.env.DEV) {
    webpackCompiler = webpack(systemConfig.webpackConfig);
    app.use(webpackDevMiddleware(webpackCompiler,
        systemConfig.webpackDevMiddlewareOptions));
}

app.use(express.static(systemConfig.staticDir));

app.use(function(req, res) {
   res.sendFile(path.resolve(__dirname + '/../../public/test.html'));
});

app.listen(systemConfig.port);
console.log('Server is listening to :' + systemConfig.port + ' port');
