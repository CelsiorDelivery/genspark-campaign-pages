/* nav.js — mobile navigation toggle. Progressive enhancement: the nav works
   as plain links without JS; this only adds the small-screen open/close. */
(function () {
  var btn = document.querySelector('.gs-nav-toggle');
  var nav = document.getElementById('gs-primary-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!open));
    btn.setAttribute('aria-expanded', String(!open));
  });
  // Close when a link is chosen (mobile)
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && window.matchMedia('(max-width: 900px)').matches) {
      nav.setAttribute('data-open', 'false');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
