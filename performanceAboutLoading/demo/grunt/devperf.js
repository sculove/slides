module.exports = {
	options: {
		urls: [
			"http://m.naver.com",
			"http://beta.m.naver.com/?debug=true"
		],
		phantomasOptions: {
	        "user-agent" : "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4",
	        "viewport" : "414x736"
	      },
	      // https://github.com/gmetais/grunt-devperf#default-list-of-warnings
		warnings: [{
			// Disabling a warning (-1 is infinite)
			variable: "jsErrors",
			limit: -1,
		}, {
			variable: "jQuerySizzleCalls",
			limit: 42,
		}, {
			variable: "DOMelementsCount",
			limit: 1000,
		}, {
			variable: "consoleMessages",
			limit: 0
		}],
		numberOfRuns: 2,
		timeout: 120,
		openResults: true,
		resultsFolder: './devperf'
	}
};