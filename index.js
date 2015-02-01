'use strict';

var express = require('express');
var kraken = require('kraken-js');

var options, app, port;

options = {
    onconfig: function (config, next) {
        next(null, config);
    }
};

app = module.exports = express();
app.use(kraken(options));

port = process.env.PORT || 8000;

app.listen(port, function (error) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});
