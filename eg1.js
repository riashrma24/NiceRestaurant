  const slider = document.querySelector('.slider');
  const images = slider.querySelectorAll('img');
  let index = 0;

  setInterval(() => {
    console.log(images.length);
    index = (index + 1) % images.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
    slider.style.transition = 'transform 1s ease-in-out';
  }, 3000); 

