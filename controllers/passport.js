var FacebookStrategy = require('passport-facebook').Strategy;
var fbConfig = require('auth.js');

module.exports = function(passport) {

    passport.use('facebook', new FacebookStrategy({
            clientID        : fbConfig.clientID,
            clientSecret    : fbConfig.clientSecret,
            callbackURL     : fbConfig.callbackURL
        },

        // facebook will send back the tokens and profile
        function(access_token, refresh_token, profile, done) {

            console.log('profile', profile);

            // asynchronous
            process.nextTick(function() {

                // find the user in the database based on their facebook id

            });

        }));

};