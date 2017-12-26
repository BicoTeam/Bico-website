// JS imports
import 'particles.js';
import 'vanilla-tilt';

// CSS and SASS files
import './index.scss';

if(window.location.pathname === '/') {
  particlesJS.load('particles-js', '/particles.json', function() {});
}
