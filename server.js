var express = require('express');
var path = require('path');

var app = express();
app.set('view engine', 'jade');
app.use('/',express.static(path.join(__dirname, 'public')));

var facebookauth_routes = require('./routes/router_facebookauth');
app.use('/auth',facebookauth_routes);

app.listen(9000);
console.log("server running on port 9000");