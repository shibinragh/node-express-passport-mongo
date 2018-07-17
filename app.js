var express = require('express');
var app = express();
var dbConfig = require('./model/db.js')
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession ({secret: 'mysecret'}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done){
    done(null, user._id);
});
passport.deserializeUser( function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});