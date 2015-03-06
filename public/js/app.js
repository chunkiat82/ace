require.config({
  shim: {

  },
  paths: {
    angular: "../components/angular/angular",
    jquery: "../components/jquery/dist/jquery",
    bootstrap: "../components/bootstrap/dist/js/bootstrap",
    "bootstrap-filestyle": "../components/bootstrap-filestyle/src/bootstrap-filestyle",
    "dustjs-linkedin": "../components/dustjs-linkedin/dist/dust-full.min",
    "dustjs-linkedin-helpers": "../components/dustjs-linkedin-helpers/lib/dust-helpers",
    requirejs: "../components/requirejs/require",
    "jquery.postmessage-transport": "../components/blueimp-file-upload/js/cors/jquery.postmessage-transport",
    "jquery.xdr-transport": "../components/blueimp-file-upload/js/cors/jquery.xdr-transport",
    "jquery.ui.widget": "../components/blueimp-file-upload/js/vendor/jquery.ui.widget",
    "jquery.fileupload": "../components/blueimp-file-upload/js/jquery.fileupload",
    "jquery.fileupload-process": "../components/blueimp-file-upload/js/jquery.fileupload-process",
    "jquery.fileupload-validate": "../components/blueimp-file-upload/js/jquery.fileupload-validate",
    "jquery.fileupload-image": "../components/blueimp-file-upload/js/jquery.fileupload-image",
    "jquery.fileupload-audio": "../components/blueimp-file-upload/js/jquery.fileupload-audio",
    "jquery.fileupload-video": "../components/blueimp-file-upload/js/jquery.fileupload-video",
    "jquery.fileupload-ui": "../components/blueimp-file-upload/js/jquery.fileupload-ui",
    "jquery.fileupload-jquery-ui": "../components/blueimp-file-upload/js/jquery.fileupload-jquery-ui",
    "jquery.fileupload-angular": "../components/blueimp-file-upload/js/jquery.fileupload-angular",
    "jquery.iframe-transport": "../components/blueimp-file-upload/js/jquery.iframe-transport"
  },
  packages: [

  ]
});


require(["angular","jquery","dustjs-linkedin","dustjs-linkedin-helpers","bootstrap","bootstrap-filestyle"], function () {

    var app = {
        initialize: function () {
            // Your code here
        }
    };

    app.initialize();

});