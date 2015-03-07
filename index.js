"use strict";

var express = require("express");
var kraken = require("kraken-js");
var upload = require('jquery-file-upload-middleware');
var uploadhandler = require('./uploadhandler');

var options, app, port;

options = {
    onconfig: function (config, next) {
        next(null, config);
    }
};

app = module.exports = express();
app.use(kraken(options));

// configure upload middleware
upload.configure({
    uploadDir: uploadhandler.uploadDir,
    uploadUrl: uploadhandler.uploadUrl,
    imageVersions: {
        thumbnail: {
            width: 80,
            height: 80
        }
    }
});

port = process.env.PORT || 8000;

/*for ajax fileupload, need to integrate with kraken next*/
app.use('/upload', upload.fileHandler());
upload.on('end', uploadhandler.onEnd);

app.listen(port, function (error) {
    console.log("[%s] Listening on http://localhost:%d", app.settings.env, port);
});
