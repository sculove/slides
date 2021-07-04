module.exports = {
	min: {
		options: {
			optimizationLevel: 7,
			progressive: true
		},
		files: [
			{
				expand: true,
				cwd: "<%= pkg.workspace %>/images/_resize",
				src: "**/*.{png,jpg}",
				dest: "<%= pkg.workspace %>/images"
			}
		]
	}
};