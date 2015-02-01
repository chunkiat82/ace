/**
 *
 * Created by taosun on 28/12/14.
 */
var transformer = require('../../lib/transformer/transformer');

module.exports = function (router) {
    router.post('/', function (request, response) {
        // get region from request
        var region = request.body['region'];
        // get excel file content from request
        transformer.transform(region, request.files.file.path, function(content) {
            //response.header('Content-Type','text/xml').send(xml(content));
            response.type('text/plain').send(content);
        });
    });
};
