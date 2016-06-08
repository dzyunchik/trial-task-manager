var mongoose = require('mongoose');
var Router = require('express').Router;

var router = new Router();

var User = require('./../models/User');

router.use('/auth', require('./auth'));
router.use('/tasks', require('./tasks'));

module.exports = router;