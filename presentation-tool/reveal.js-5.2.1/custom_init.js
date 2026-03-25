Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    slideNumber: true,
    jumpToSlide: false,
    keyboard: true,
    overview: true,
    touch: true,
    zoom: true,

    mermaid: {
        // flowchart: {
        //   curve: 'linear',
        // },
        'theme': 'dark', 
        'themeVariables': {
            'darkMode': true,
            'cScale0': '#4a90d9',
            'cScale1': '#d94a7a',
            'cScale2': '#50c878',
            'cScale3': '#e6a23c',
            'cScaleLabel0': '#ffffff',
            'cScaleLabel1': '#ffffff',
            'cScaleLabel2': '#ffffff',
            'cScaleLabel3': '#ffffff',
            'cScalePeer0': '#3a70b9',
            'cScalePeer1': '#b93a6a',
            'cScalePeer2': '#40a868',
            'cScalePeer3': '#c6922c',
            'titleColor': '#ffffff',
            'sectionBkgColor': '#333333',
            'altSectionBkgColor': '#444444',
            'sectionBkgColor2': '#555555'
        }
    },
    mermaidPlugin: {
        // beforeRender(el) {
        //   console.log(el);
        //   // if return false this element will not call mermaid render
        // },
        // afterRender(el) {
        //   console.log(el);
        // },
    },
    plugins: [ 
        RevealMarkdown, 
        RevealHighlight, 
        RevealMath.KaTeX, 
        RevealZoom, 
        RevealChart,
        RevealMermaid, 
        RevealChart,
        // RevealNotes
     ]
});