// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	// Display controls in the bottom right corner
    controls: true,

    // Display a presentation progress bar
    progress: true,

    // Display the page number of the current slide
    slideNumber: true,

    // Push each slide change to the browser history
    history: true,

    // Enable slide navigation via mouse wheel
    mouseWheel: false,

    // Enable keyboard shortcuts for navigation
    keyboard: true,

    // Enable the slide overview mode
    overview: true,

    // Vertical centering of slides
    center: true,

    // Enables touch navigation on devices with touch input
    touch: true,

    // Loop the presentation
    // loop: false,

    // Change the presentation direction to be RTL
    // rtl: false,

    // Randomizes the order of slides each time the presentation loads
    // shuffle: false,

    // Turns fragments on and off globally
    fragments: true,

    // Flags if the presentation is running in an embedded mode,
    // i.e. contained within a limited portion of the screen
    embedded: true,

    // Flags if we should show a help overlay when the questionmark
    // key is pressed
    help: true,

    // Flags if speaker notes should be visible to all viewers
    // showNotes: false,

    // Number of milliseconds between automatically proceeding to the
    // next slide, disabled when set to 0, this value can be overwritten
    // by using a data-autoslide attribute on your slides
    // autoSlide: 0,

    // Stop auto-sliding after user input
    // autoSlideStoppable: true,

    // Use this method for navigation when auto-sliding
    // autoSlideMethod: Reveal.navigateNext,

    // Hides the address bar on mobile devices
    hideAddressBar: true,

    // Opens links in an iframe preview overlay
    // previewLinks: false,

    // Transition style
    // transition: 'default', // none/fade/slide/convex/concave/zoom

    // Transition speed
    // transitionSpeed: 'default', // default/fast/slow

    // Transition style for full page slide backgrounds
    // backgroundTransition: 'default', // none/fade/slide/convex/concave/zoom

    // Number of slides away from the current that are visible
    // viewDistance: 3,

    // Parallax background image
    // parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

    // Parallax background size
    // parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"

    // Number of pixels to move the parallax background per slide
    // - Calculated automatically unless specified
    // - Set to 0 to disable movement along an axis
    // parallaxBackgroundHorizontal: null,
    // parallaxBackgroundVertical: null,

	// More info https://github.com/hakimel/reveal.js#dependencies
	dependencies: [
        // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
        { src: '../presentation-tool/reveal.js-3.3.0/lib/js/classList.js', condition: function() { return !document.body.classList; } },

        // Interpret Markdown in <section> elements
        { src: '../presentation-tool/reveal.js-3.3.0/plugin/markdown/marked.js',
        // condition: function() { return !!document.querySelector( '[data-markdown]' ); }
        },
        { src: '../presentation-tool/reveal.js-3.3.0/plugin/markdown/markdown.js',
        // condition: function() { return !!document.querySelector( '[data-markdown]' ); }
        },

        // Syntax highlight for <code> elements
        { src: '../presentation-tool/reveal.js-3.3.0/plugin/highlight/highlight.pack.js', async:true, callback: function() { hljs.initHighlightingOnLoad(); }
        },

        // Zoom in and out with Alt+click
        { src: '../presentation-tool/reveal.js-3.3.0/plugin/zoom-js/zoom.js', async: true }

        // Speaker notes
        // { src: '../presentation-tool/reveal.js-3.3.0/plugin/notes/notes.js', async: true },

        // MathJax
        // { src: '../presentation-tool/reveal.js-3.3.0/plugin/math/math.js', async: true }
	]
});