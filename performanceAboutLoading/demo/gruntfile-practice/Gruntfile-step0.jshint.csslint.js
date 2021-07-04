/*global module:false*/
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		jshint: {
			options: {
				jshintrc: true
			},
			jsfile: {
				src: "js/**/*.js"
			},
			gruntfile : {
				src : "Gruntfile.js"
			}
		},
		csslint: {
			options : {
				csslintrc : ".csslintrc"
			},
			cssfile: {
				src: "css/**/*.css"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-csslint");

	// Default task.
	grunt.registerTask("check", ["jshint", "csslint"]);
	grunt.registerTask("default", ["check"]);
};