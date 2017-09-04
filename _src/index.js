// JS imports
import VanillaModal from 'vanilla-modal';

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
