import Reveal from '../presentation-tool/reveal.js-4.0.2/dist/reveal.esm.js';
import Markdown from '../presentation-tool/reveal.js-4.0.2/plugin/markdown/markdown.esm.js';
import Highlight from '../presentation-tool/reveal.js-4.0.2/plugin/highlight/highlight.esm.js';
import Zoom from '../presentation-tool/reveal.js-4.0.2/plugin/zoom/zoom.esm.js';

Reveal.initialize({
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
  // Hides the address bar on mobile devices
  hideAddressBar: true,
  // Turns fragments on and off globally
  fragments: true,
  autoAnimateEasing: 'ease-out',
  autoAnimateDuration: 0.8,
  autoAnimateUnmatched: false,
  plugins: [ Markdown, Highlight, Zoom ]
});