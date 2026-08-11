/* faq.js — optional enhancement for the native <details> FAQ accordion.
   The accordion is fully functional without JS. This only adds deep-linking:
   if the URL has #faq-<n>, the matching item opens and scrolls into view. */
(function () {
  var items = document.querySelectorAll('.gs-faq__item');
  if (!items.length) return;
  items.forEach(function (el, i) { el.id = el.id || ('faq-' + (i + 1)); });
  function openFromHash() {
    var t = document.querySelector(window.location.hash && window.location.hash.length > 1 ? window.location.hash : '#none');
    if (t && t.classList.contains('gs-faq__item')) {
      t.setAttribute('open', '');
      t.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  window.addEventListener('hashchange', openFromHash);
  openFromHash();
})();
