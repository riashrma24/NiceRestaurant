  let currentIndex = 0;
  const track = document.getElementById("testimonialTrack");
  const cards = track.children;
  const cardsPerView = 3;
  const totalCards = cards.length;
  const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextTestimonial() {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  }

  function prevTestimonial() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

