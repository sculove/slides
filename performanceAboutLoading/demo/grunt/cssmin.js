module.exports = {
	css : {
		files: [{
			expand: true,
			cwd: "<%= pkg.workspace %>/css",
			src: "*.css",
			dest: "<%= pkg.workspace %>/css",
			ext: ".min.css"
		}]
	}
};