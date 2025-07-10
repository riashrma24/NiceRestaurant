const tabButtons = document.querySelectorAll('.menu-btns .round-btn');
  const cards = document.querySelectorAll('.menu-card');
  console.log(tabButtons);


  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const tab = button.getAttribute('data-tab');

      cards.forEach(card => {
        if (tab === 'all' || card.getAttribute('data-tab') === tab) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  window.addEventListener('load', () => { AOS.init(); });