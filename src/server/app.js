var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var passport = require('passport');
var mongoose = require('mongoose');

require('./passport');

var isInDevMode = !!process.env.DEV;
var config = require('../../config/' + (isInDevMode ? 'dev.' : '') + 'config');

var api = require('./api');

var systemConfig;
var app;
var webpackCompiler;

systemConfig = config.system;

app = express();

mongoose.connect(systemConfig.mongodb);

/*global process*/
// if in dev mode generate js with webpack
if (process.env.DEV) {
    webpackCompiler = webpack(systemConfig.webpackConfig);
    app.use(webpackDevMiddleware(webpackCompiler,
        systemConfig.webpackDevMiddlewareOptions));
}

app.use(express.static(systemConfig.staticDir));

app.use(bodyParser.json({
    extended: false
}));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser('qwertyuio1'));
app.use(expressSession({
    resave: false,
    secret: 'qwertyuio',
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session({
    secret: 'qwertyuio2'
}));

app.use('/api', api);

app.use(function(req, res) {
   res.sendFile(path.resolve(__dirname + '/../../public/test.html'));
});


app.listen(systemConfig.port);
console.log('Server is listening to :' + systemConfig.port + ' port');
