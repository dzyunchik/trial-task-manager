var mongoose = require('mongoose');
var User = require('../models/User');

var isInDevMode = !!process.env.DEV;
var config = require('../../../config/' + (isInDevMode ? 'dev.' : '') + 'config');

var connect = mongoose.connect(config.system.mongodb);

var testUsers = [
    {
        name: 'Vasa',
        password: 111
    },
    {
        name: 'John',
        password: 222
    },
    {
        name: 'Otto',
        password: 333
    }
];

var promises = testUsers.map(function(data) {
    return new Promise(function(resolve, reject) {
        User.findOne({
            name: data.name
        }, function(err, user) {
            if (err) {
                return resolve();
            }

            if (user) {
                return resolve();
            }

            user = new User(data);
            user.save(function(err) {
                if(err) {
                    return resolve();
                }
                console.log('user ' + data.name + ' created');
                resolve();
            });
        });
    });
});

Promise.all(promises).then(function() {
    connect.disconnect();
}, function() {
    connect.disconnect();
});