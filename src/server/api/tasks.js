var Router = require('express').Router;

var router = new Router();

var Task = require('./../models/Task');

//router.post('/login', function(req, res) {
//    console.log(req.body);
//    res.send('ok');
//});

router.get('/', function(req, res) {
    var filter;

    if (!req.user) {
        return res.json({
            error: {
                code: 2,
                message: 'Not authorized'
            }
        });
    }

    if (req.query.filter === 'created') {
        filter = {
            owner: { $regex: new RegExp("^" + req.user.name.toLowerCase(), "i") }
        };
    } else {
        filter = {
            performer: { $regex: new RegExp("^" + req.user.name.toLowerCase(), "i") }
        };
    }

    Task.find(filter, function(err, tasks) {
        if (err) {
            return res.json({
                error: {
                    message: err.message
                }
            });
        }
        res.json({
            data: {
                tasks: tasks.map(function (task) {
                    return Object.assign({}, task, {
                        id: task._id,
                        _id: null
                    });
                })
            }
        });
    });
});

module.exports = router;