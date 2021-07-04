// Printing and PDF exports
if( window.location.search.match( /print-pdf/gi ) ) {
	var link = document.createElement( 'link' );
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = '../__lib__/revealjs/css/print/pdf.css';
	document.getElementsByTagName( 'head' )[0].appendChild( link );
}

// google analystic
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-37362821-4', 'auto');
ga('send', 'pageview');