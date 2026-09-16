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

  // largura do item + gap muda por breakpoint (ver styles.css .gallery-item-btn)
  function getScrollStep() {
    return window.innerWidth >= 900 ? 256 : 172; // 240+16 desktop / 160+12 mobile
  }

  prev.addEventListener('click', function () {
    track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
  });
  next.addEventListener('click', function () {
    track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
  });
});

// Modal de vídeo — click-to-play para community-strip e galeria
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('video-modal');
  var player = document.getElementById('video-modal-player');
  var closeBtn = document.querySelector('.video-modal-close');
  var triggers = document.querySelectorAll('[data-video]');

  if (!modal || !player) return;

  function openModal(src) {
    player.src = src;
    modal.hidden = false;
    player.play().catch(function () {
      /* autoplay com som pode ser bloqueado; usuário pode dar play manual */
    });
  }

  function closeModal() {
    player.pause();
    player.removeAttribute('src');
    player.load();
    modal.hidden = true;
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var src = trigger.getAttribute('data-video');
      if (src) openModal(src);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
});
