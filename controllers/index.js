"use strict";
var bunyan = require("bunyan");
var log = bunyan.createLogger({name: "ace"});

module.exports = function (router) {
    router.get("/", function (req, res) {
        log.info("ACE index");
        res.render("index", {});
    });

};
