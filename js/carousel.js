
  const slides = document.querySelectorAll('.slide');
  const bottomCounter = document.getElementById('bottomCounter');
  const bottomPrevBtn = document.getElementById('bottomPrevBtn');
  const bottomNextBtn = document.getElementById('bottomNextBtn');
  const sliderInner = document.querySelector('.slider-inner');

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });

    const activeSlide = slides[currentIndex];
    const newHeight = activeSlide.offsetHeight;
    sliderInner.style.height = `${newHeight}px`;

    bottomCounter.querySelector('.current').textContent = currentIndex + 1;
    bottomCounter.querySelector('.total').textContent = totalSlides;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  bottomNextBtn.addEventListener('click', nextSlide);
  bottomPrevBtn.addEventListener('click', prevSlide);

  function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('show');
  }

  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('show');
    document.getElementById('lightbox-img').src = '';
  }

  function handleLightboxClick(e) {
    if (!document.getElementById('lightbox-img').contains(e.target)) {
      closeLightbox();
    }
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });

  window.addEventListener('load', updateSlider);
  window.addEventListener('resize', updateSlider);
