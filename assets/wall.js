/* Home page image wall.
   Computer: the three columns drift at different speeds as you scroll (all start and end aligned).
   Phone: one column, each photo fades up as it comes into view.
   Nothing moves for visitors who ask their device for reduced motion. */
(function () {
  var wall = document.querySelector('[data-wall]');
  if (!wall) return;
  var cols = Array.prototype.slice.call(wall.querySelectorAll('.wall-col'));
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var wide = window.matchMedia('(min-width: 721px)');
  var heights = [], ticking = false, io = null;

  function measure() {
    heights = cols.map(function (c) { return c.offsetHeight; });
  }

  function drift() {
    ticking = false;
    if (!wide.matches || reduce.matches) return;
    var r = wall.getBoundingClientRect();
    var tallest = Math.max.apply(null, heights);
    var travel = r.height - window.innerHeight;
    var p = travel > 0 ? Math.min(1, Math.max(0, -r.top / travel)) : 0;
    cols.forEach(function (c, i) {
      c.style.transform = 'translate3d(0,' + (p * (tallest - heights[i])).toFixed(1) + 'px,0)';
    });
  }

  function onScroll() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(drift); }
  }

  function setup() {
    cols.forEach(function (c) { c.style.transform = ''; });
    wall.classList.remove('wall-fade');
    if (io) { io.disconnect(); io = null; }
    if (reduce.matches) return;
    if (wide.matches) {
      measure(); drift();
    } else if ('IntersectionObserver' in window) {
      wall.classList.add('wall-fade');
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px' });
      wall.querySelectorAll('.figure').forEach(function (f) { io.observe(f); });
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { setup(); });
  window.addEventListener('load', function () { measure(); drift(); });
  if (wide.addEventListener) { wide.addEventListener('change', setup); reduce.addEventListener('change', setup); }
  setup();
})();
