  document.querySelectorAll('.faq-item').forEach(function (item) {
    var toggle = item.querySelector('.faq-toggle');
    var sign = item.querySelector('.faq-sign');
    toggle.addEventListener('click', function () {
      var willOpen = !item.classList.contains('is-open');
      document.querySelectorAll('.faq-item').forEach(function (other) {
        other.classList.remove('is-open');
        other.querySelector('.faq-sign').textContent = '+';
      });
      if (willOpen) {
        item.classList.add('is-open');
        sign.textContent = '–';
      }
    });
  });
