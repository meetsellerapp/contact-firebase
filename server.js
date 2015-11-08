var express = require('express');
var path = require('path');
var passport = require('passport');

var app = express();
app.set('view engine', 'jade');
app.use('/',express.static(path.join(__dirname, 'public')));

// Initialize Passport
//app.use(passport.initialize());
//app.use(passport.session()); // persistent login sessions

var facebookauth_routes = require('./routes/router_facebookauth');
app.use('/auth',facebookauth_routes);

//app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));
//
//app.get('/auth/facebook/callback',
//    passport.authenticate('facebook', { successRedirect: '/profile',
//        failureRedirect: '/' }));

app.listen(9000);
console.log("server running on port 9000");