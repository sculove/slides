module.exports = {
	js1: {
		src: "<%= concat.js1.dest %>",
		dest: "<%= pkg.workspace %>/js/<%= pkg.name %>_1.min.js"
	},
	js2: {
		src: "<%= concat.js2.dest %>",
		dest: "<%= pkg.workspace %>/js/<%= pkg.name %>_2.min.js"
	},
	js3: {
		src: "<%= concat.js3.dest %>",
		dest: "<%= pkg.workspace %>/js/<%= pkg.name %>_3.min.js"
	}
};