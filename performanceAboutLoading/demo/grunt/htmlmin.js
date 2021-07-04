module.exports = {
	options: {
		removeComments: true,
		collapseWhitespace: true
	},
	tuning2: {
		src: "html/raw-tuning-2.html",
		dest : "<%= pkg.workspace %>/tuning-2.html"
	},
	tuning3: {
		src: "html/raw-tuning-3.html",
		dest : "<%= pkg.workspace %>/tuning-3.html"
	}
};