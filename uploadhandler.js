/**
 *
 * Created by rayho
 */
var bunyan = require("bunyan");
var log = bunyan.createLogger({name: "ace::transformer"});
var uploadDir = __dirname + '/public/uploads'
var uploadUrl = "/upload";

"use strict";
var onEnd = function (fileInfo, req, res) { 

	log.info("Upload Completed");
};

module.exports = {onEnd:onEnd,uploadDir:uploadDir,uploadUrl:uploadUrl};