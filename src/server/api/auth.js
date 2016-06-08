var mongoose = require('mongoose');
var passport = require('passport');
var Router = require('express').Router;

var router = new Router();

var User = require('./../models/User');

//router.post('/login', function(req, res) {
//    console.log(req.body);
//    res.send('ok');
//});

router.get('/userInfo', function(req, res) {
    if (req.query.name) {
        User.findOne({
            name: { $regex: new RegExp("^" + req.query.name.toLowerCase(), "i") }
        }, function(err, user) {
            if (err) {
                res.status(404);
                return res.json({
                    error: {
                        message: err.message
                    }
                });
            }

            if (!user) {
                res.status(404);
                return res.json({
                    error: {
                        code: 1,
                        message: 'User is not found'
                    }
                });
            }

            res.json({
                data: {
                    name: user.name
                }
            });
        });
    } else if (req.user) {
        res.json({
            data: {
                name: req.user.name
            }
        });
    } else {
        res.status(404);
        return res.json({
            error: {
                code: 1,
                message: 'User is not found'
            }
        });
    }
});


router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }

        if (!user) {
            res.status(401);
            res.json({
                error: {
                    code: 1,
                    message: 'Name or password are incorrect'
                }
            });
            return;
        }
        req.logIn(user, function(err) {
            if (err) { return next(err); }

            return res.send({
                success: true,
                data: {
                    name: user.name
                }
            });
        });
    })(req, res, next);
});

router.get('/logout', function(req, res, next) {
    req.logout();
    res.json({
        data: {
            success: true
        }
    });
});

module.exports = router;