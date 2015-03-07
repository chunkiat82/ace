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
    "jquery.iframe-transport": "../components/blueimp-file-upload/js/jquery.iframe-transport",
    noty: "../components/noty/js/noty/packaged/jquery.noty.packaged",   
    list: "../components/list.js/dist/list"
  },
  packages: [

  ]
});


require(["angular","jquery","list","noty","jquery.ui.widget","jquery.fileupload","jquery.iframe-transport","dustjs-linkedin","dustjs-linkedin-helpers","bootstrap","bootstrap-filestyle"], function (aa,bb,cc) {

    var app = {
        initialize: function () {

            var List = cc;

            //[TODO] - this should ideally move to home page
            $(function () {                    
                
                // Change this to the location of your server-side upload handler:
                var url = 'transform';
                $('#upload-excel').fileupload({      
                    formData: {region : $('#select-region').val()},
                    dataType: 'json',
                    done: function (e, dataReturn) {

                        $.ajax({
                            type: "POST",
                            url: "/transform", 
                            data:{
                                "region":$('#select-region').val(),
                                "_csrf":$('#csrf').val(),
                                "filename" : dataReturn.result.files[0].name
                            }, 
                            success: function(result){
                                if (result.errorAccounts.length){                                   
                                    var n = noty({
                                        closeWith: ['click'], 
                                        type: 'error',
                                        text:'There are invalid records, please review',
                                        modal: true,
                                        callback:{
                                            onCloseClick: function(){
                                                $('#progress .progress-bar').css(
                                                    'width',
                                                    0 + '%'
                                                );

                                                $('#users').show();

                                                var options = {
                                                  valueNames: [ 'hotel', 'errors' ],
                                                  item:'<li class="list-group-item list-group-item-danger"><h3 class="hotel"></h3><p class="errors"></p></li>'
                                                };
                                                
                                                var userList = new List('users', options);
                                                
                                                userList.clear();
                                                
                                                for (var i=0;i<result.errorAccounts.length;i++){
                                                    var errAcc  = result.errorAccounts[i];
                                                    userList.add({
                                                      hotel: result.errorAccounts[i]["HotelName"],
                                                      errors: JSON.stringify(result.errorAccounts[i]["Errors"])
                                                    });                                              
                                                }

   
                                            }
                                        }
                                    });
                                }else{
                                    var n = noty({
                                        text:'Click to download <a href="'+result.link+'">Zipped XML<a/>',
                                        modal: true,
                                        callback:{
                                            onCloseClick: function(){
                                                $('#progress .progress-bar').css(
                                                    'width',
                                                    0 + '%'
                                                );
                                            }
                                        }
                                    });
                                }

                            }
                        });

                    },
                    progressall: function (e, dataReturn) {
                        $('#users').hide();
                        var progress = parseInt(dataReturn.loaded / dataReturn.total * 100, 10);
                        $('#progress .progress-bar').css(
                            'width',
                            progress + '%'
                        );
                    }
                }).prop('disabled', !$.support.fileInput)
                    .parent().addClass($.support.fileInput ? undefined : 'disabled');                
            });
        }
    };

    app.initialize();

});