//router of /auth
var express = require('express');
var facebookauthCtrl = require('../controllers/ctrl_facebookauth');
var router = express.Router();

router.all('/', function (req, res, next) {
    console.log('Someone made a request to login page!');
    next();
});

// render contact list page
router.post('/facebook', function (req, res) {
    facebookauthCtrl.showLoginPage(req,res);
});

router.get('/facebook/callback', function (req,res) {
    facebookauthCtrl.authenticate();
});

module.exports = router;