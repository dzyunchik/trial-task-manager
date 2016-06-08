var mongoose = require('mongoose');
var Task = require('../models/Task');

var isInDevMode = !!process.env.DEV;
var config = require('../../../config/' + (isInDevMode ? 'dev.' : '') + 'config');

var connect = mongoose.connect(config.system.mongodb);

var testTasks = [
    {
        owner: 'Vasa',
        performer: 'John',
        state: 'Open',
        creationDate: '2015-01-01',
        description: 'Simple task'
    },
    {
        owner: 'John',
        performer: 'Vasa',
        state: 'Open',
        creationDate: '2015-04-01',
        description: 'Task from John to Vasa'
    },
    {
        owner: 'John',
        performer: 'Otto',
        state: 'Open',
        creationDate: '2015-03-01',
        description: 'Task from John to Otto'
    },
    {
        owner: 'Otto',
        performer: 'Vasa',
        state: 'Open',
        creationDate: '2015-02-01',
        description: 'Task from Otto to Vasa'
    }
];

var promises = testTasks.map(function(data) {
    return new Promise(function(resolve, reject) {
        Task.findOne({
            description: data.description
        }, function(err, task) {
            if (err) {
                return resolve();
            }

            if (task) {
                return resolve();
            }

            task = new Task(data);
            task.save(function(err) {
                if(err) {
                    return resolve();
                }
                console.log('task ' + data.description + ' created');
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