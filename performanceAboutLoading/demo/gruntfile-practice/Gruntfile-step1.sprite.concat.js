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
		},
		sprite: {
			all: {
				src: "images/icons/*.png",
				dest: "<%= pkg.workspace %>/images/icons.png",
				destCss: "css/icons.css",
				imgPath : "../images/icons.png"
			}
		},
		concat: {
			css : {
				src: ["css/btns.css", "css/icons.css", "bower_components/bootstrap/dist/css/bootstrap.css"],
				dest: "<%= pkg.workspace %>/css/<%= pkg.name %>.css"
			},
			js1: {
				src: ["bower_components/rsvp/rsvp.js", "bower_components/basket.js/dist/basket.js", "bower_components/jquery/dist/jquery.js", "bower_components/bootstrap/dist/js/bootstrap.js"],
				dest: "<%= pkg.workspace %>/js/<%= pkg.name %>_1.js"
			},
			js2: {
				src: ["bower_components/get-style-property/get-style-property.js", "bower_components/get-size/get-size.js", "bower_components/matches-selector/matches-selector.js", "bower_components/eventEmitter/EventEmitter.js", "bower_components/eventie/eventie.js", "bower_components/doc-ready/doc-ready.js", "bower_components/fizzy-ui-utils/utils.js", "bower_components/outlayer/item.js","bower_components/outlayer/outlayer.js","bower_components/imagesloaded/imagesloaded.js", "bower_components/iscroll/build/iscroll.js", "bower_components/hammerjs/hammer.js"],
				dest: "<%= pkg.workspace %>/js/<%= pkg.name %>_2.js"
			},
			js3: {
				src: ["src/module.js", "src/eg.js", "src/customEvent/*.js", "src/hook/*.js", "src/plugin/*.js", "src/class.js", "src/component.js", "src/visible.js", "src/movableCoord.js", "src/flicking.js",  "src/infiniteGrid.js"],
				dest: "<%= pkg.workspace %>/js/<%= pkg.name %>_3.js"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-csslint");
	grunt.loadNpmTasks("grunt-spritesmith");
	grunt.loadNpmTasks("grunt-contrib-concat");

	grunt.registerTask("check", ["jshint", "csslint"]);
	grunt.registerTask("reduceRequest", ["sprite", "concat"]);

	// Default task.
	grunt.registerTask("default", ["check", "reduceRequest"]);
};