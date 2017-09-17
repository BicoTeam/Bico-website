// JS imports
import VanillaModal from 'vanilla-modal';
import SmoothScroll from 'smooth-scroll';
import ScrollReveal from 'scrollreveal';
import 'particles.js';
import 'vanilla-tilt';

// CSS and SASS files
import './index.scss';

const options = {
  modal: '.modal',
  modalInner: '.modal-inner',
  modalContent: '.modal-content',
  open: '[data-modal-open]',
  close: '[data-modal-close]',
  page: 'body',
  loadClass: 'vanilla-modal',
  class: 'modal-visible',
  clickOutside: false,
  closeKeys: [27],
  transitions: true,
  onBeforeOpen: null,
  onBeforeClose: null,
  onOpen: null,
  onClose: null,
};
const modal = new VanillaModal(options);
const scroll = new SmoothScroll('.smooth');

window.sr = ScrollReveal({ viewOffset: { top: 0, right: 0, bottom: 100, left: 0 }, delay: 200 });
sr.reveal('.book__title');
sr.reveal('.book__description');
sr.reveal('.how__row');
sr.reveal('.step', { duration: 500 }, 200);
sr.reveal('.tokens__title');
sr.reveal('.tokens__description');
sr.reveal('.token', { duration: 500 }, 200);
sr.reveal('calendar__title');
sr.reveal('calendar__timeline');
sr.reveal('.team__container');

particlesJS.load('particles-js', '/particles.json', function() {});
