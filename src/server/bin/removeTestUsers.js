var mongoose = require('mongoose');
var User = require('../models/User');

var isInDevMode = !!process.env.DEV;
var config = require('../../../config/' + (isInDevMode ? 'dev.' : '') + 'config');

var connect = mongoose.connect(config.system.mongodb);

User.remove({}, function() {
    connect.disconnect();
});

