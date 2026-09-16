// Acordeon do FAQ — abre um item por vez
document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.accordion-item');

  items.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panel = btn.nextElementSibling;
      var isOpen = btn.getAttribute('aria-expanded') === 'true';

      // fecha todos os outros
      items.forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          other.nextElementSibling.style.maxHeight = null;
        }
      });

      if (isOpen) {
        btn.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      } else {
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
});

// Setas da galeria de creators (desktop) — rolam o carrossel
document.addEventListener('DOMContentLoaded', function () {
  var track = document.querySelector('.gallery-placeholder');
  var prev = document.querySelector('.gallery-arrow--prev');
  var next = document.querySelector('.gallery-arrow--next');

  if (!track || !prev || !next) return;

  var scrollStep = 212; // largura do item (200px) + gap (12px)

  prev.addEventListener('click', function () {
    track.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  });
  next.addEventListener('click', function () {
    track.scrollBy({ left: scrollStep, behavior: 'smooth' });
  });
});
