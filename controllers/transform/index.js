/**
 *
 * Created by taosun on 28/12/14.
 */
"use strict";
var transformer = require("../../lib/transformer/transformer");
var bunyan = require("bunyan");
var log = bunyan.createLogger({name: "ace::transform"});

module.exports = function (router) {
    router.post("/", function (request, response) {
        // get region from request
        var region = request.body.region;
        log.info("transform for region " + region);
        // get excel file content from request
        transformer.transform(request.files.file.path, region, function(content) {
            //response.header("Content-Type","text/xml").send(xml(content));
            //response.type("text/plain").send(content);
            log.info(content);
            response.end();
        });
    });
};
