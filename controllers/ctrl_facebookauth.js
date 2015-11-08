//var passport = require('../config/passport');

var facebookauthCtrl = Object.create({});

facebookauthCtrl.showLoginPage = function (req,res) {
    //passport.authenticate('facebook', { scope : 'email' });
    res.redirect('/');
};

facebookauthCtrl.authenticate = function(req,res) {
    passport.authenticate('facebook', {
        successRedirect : '/profile',
        failureRedirect : '/'
    });
}

module.exports = facebookauthCtrl;