'use strict';
var express = require('express');
var app = express();

app.use('/', express.static('app/src/html'));
app.use('/html', express.static('app/src/html'));
app.use('/js', express.static('app/static/js'));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Started at at http://%s:%s', host, port);
});

