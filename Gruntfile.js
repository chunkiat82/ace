'use strict';


module.exports = function (grunt) {

	grunt.initConfig({
	  bowerRequirejs: {
	    target: {
	      rjsConfig: 'public/js/app.js'
	    }
	  }
	});
    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

    grunt.loadNpmTasks('grunt-bower-requirejs');

    // Register group tasks
    grunt.registerTask('default', [ 'jshint', 'less','bowerRequirejs','i18n', 'copyto' ]);
    grunt.registerTask('test', [ 'jshint', 'mochacli' ]);
	
};
