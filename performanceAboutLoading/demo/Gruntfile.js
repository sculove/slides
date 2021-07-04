/*global module:false*/
module.exports = function(grunt) {
	"use strict";
	require("time-grunt")(grunt);
	require("load-grunt-tasks")(grunt);
	require("load-grunt-config")(grunt, {
		data: {
			pkg : grunt.file.readJSON("package.json")
		}
	});

	grunt.registerTask("check", ["jshint", "csslint"]);
	grunt.registerTask("reduceRequest", ["sprite", "concat"]);
	grunt.registerTask("reduceContent", ["uglify", "cssmin", "htmlmin"]);
	grunt.registerTask("reduceImageContent", ["responsive_images", "imagemin"]);
	grunt.registerTask("default", ["clean", "check", "reduceRequest", "reduceContent", "reduceImageContent"]);

	grunt.registerTask("dev", ["devperf"]);
	grunt.registerTask("static", ["check", "concat", "uglify", "cssmin", "htmlmin"]);
	grunt.registerTask("image", ["sprite","responsive_images", "imagemin"]);
};