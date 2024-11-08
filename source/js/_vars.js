export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  activeClass: 'active',
  activeClassMode: 'mode',
  header: document.querySelector('header'),
  footer: document.querySelector('footer'),

  burger: document.querySelectorAll('.burger'),
  mobileMenu: document.querySelector('.mobile'),
  
  overlay: document.querySelector('[data-overlay]'),

  // modals: [...document.querySelectorAll('[data-popup]')],
  // modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
}
