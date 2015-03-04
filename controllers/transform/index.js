/**
 *
 * Created by taosun on 28/12/14.
 */
"use strict";
var fs = require("fs");
var path = require("path");
var transformer = require("../../lib/transformer/transformer");
var bunyan = require("bunyan");
var log = bunyan.createLogger({name: "ace::transform"});
var zlib = require("zlib");
var gzip = zlib.createGzip();

var zipFile = function (sourceFilename, destFilename) {
    var inp = fs.createReadStream(sourceFilename);
    var out = fs.createWriteStream(destFilename);
    inp.pipe(gzip).pipe(out);
};

module.exports = function (router) {
    router.post("/", function (request, response) {
        // get region from request
        var region = request.body.region;
        log.info("Received transformation request for region " + region);
        // get excel file content from request
        transformer.transform(request.files.file.path, region, function (content) {
            var filename = region + (new Date().getTime()) + ".xml";
            var fileLink = "/downloads/" + filename;

            var xmlPath = path.join(__dirname, "../../public" + fileLink);
            var zipPath = xmlPath + ".gz";

            fs.writeFileSync(xmlPath, content);
            zipFile(xmlPath, zipPath);

            log.info("Transformation result file: " + xmlPath);

            response.render("download", {
                link: fileLink + ".gz"
            });
        });
    });
};
