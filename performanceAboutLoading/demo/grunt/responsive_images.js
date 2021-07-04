module.exports = {
	size256 : {
		options: {
			sizes : [{
				name: "1x", width: 256
			},{
				name: "2x", width: 512
			}]
		},
		files : [{
			expand: true,
			src: "*.*",
			cwd: "images/256",
			dest: "<%= pkg.workspace %>/images/_resize/256"
		}]
	},
	size140 : {
		options: {
			sizes : [{
				name: "1x", width: 140
			},{
				name: "2x", width: 280
			}]
		},
		files : [{
			expand: true,
			src: "*.*",
			cwd: "images/140",
			dest: "<%= pkg.workspace %>/images/_resize/140"
		}]
	},
	size112 : {
		options: {
			sizes : [{
				name: "1x", width: 112
			},{
				name: "2x", width: 224
			}]
		},
		files : [{
			expand: true,
			src: "*.*",
			cwd: "images/112",
			dest: "<%= pkg.workspace %>/images/_resize/112"
		}]
	},
	size99 : {
		options: {
			sizes : [{
				name: "1x", width: 99
			},{
				name: "2x", width: 198
			}]
		},
		files : [{
			expand: true,
			src: "*.*",
			cwd: "images/99",
			dest: "<%= pkg.workspace %>/images/_resize/99"
		}]
	}
};