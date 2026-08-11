/* library.js — progressive-enhancement search + category filter for the
   Programs landing grid. Works entirely client-side (fine while the library is
   small) and is architected to scale: it reads data-search / data-category off
   each card, so no separate index is maintained. All cards remain real,
   crawlable links; filtering only toggles the [hidden] attribute. */
(function () {
  var grid = document.querySelector('[data-program-grid]');
  if (!grid) return;

  var cards = Array.prototype.slice.call(grid.querySelectorAll('[data-program]'));
  var search = document.getElementById('gs-program-search');
  var filters = Array.prototype.slice.call(document.querySelectorAll('.gs-filter'));
  var countEl = document.querySelector('[data-result-count]');
  var emptyEl = document.querySelector('[data-empty]');
  var resetEl = document.querySelector('[data-reset]');

  var state = { term: '', category: 'all' };

  function apply() {
    var term = state.term.trim().toLowerCase();
    var visible = 0;
    cards.forEach(function (card) {
      var matchCat = state.category === 'all' || card.getAttribute('data-category') === state.category;
      var matchTerm = !term || card.getAttribute('data-search').indexOf(term) !== -1;
      var show = matchCat && matchTerm;
      card.hidden = !show;
      if (show) visible++;
    });
    if (countEl) countEl.textContent = String(visible);
    if (emptyEl) emptyEl.style.display = visible ? 'none' : 'block';
    grid.style.display = visible ? '' : 'none';
    var active = state.term || state.category !== 'all';
    if (resetEl) resetEl.hidden = !active;
  }

  if (search) {
    search.addEventListener('input', function () { state.term = search.value; apply(); });
  }

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.category = btn.getAttribute('data-filter');
      filters.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      apply();
    });
  });

  if (resetEl) {
    resetEl.addEventListener('click', function () {
      state.term = ''; state.category = 'all';
      if (search) search.value = '';
      filters.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-filter') === 'all')); });
      apply();
      if (search) search.focus();
    });
  }

  // Category cards deep-link (#category-x) -> preselect that filter.
  function applyHashCategory() {
    var m = (window.location.hash || '').match(/^#category-(.+)$/);
    if (!m) return;
    var id = m[1];
    var btn = filters.filter(function (b) { return b.getAttribute('data-filter') === id; })[0];
    if (btn) btn.click();
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-cat-jump]');
    if (a) { setTimeout(applyHashCategory, 0); }
  });
  window.addEventListener('hashchange', applyHashCategory);
  applyHashCategory();
})();
