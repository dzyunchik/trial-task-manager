var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

var User = require('./models/User');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(
    {usernameField:"name", passwordField:"password"},
    function(name, password, done) {
        User.findOne({
            name: { $regex: new RegExp("^" + name.toLowerCase(), "i") }
        }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, {message: 'User not found'});
            }

            if (user.password !== password) {
                return done(null, false, { message: 'Incorrect name or password' });
            }

            return done(null, user);
        });
    }
));