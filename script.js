let currentIndex = 0;

function updateCarousel() {
  const carousel = document.getElementById("carousel");
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update dots
  const dots = document.querySelectorAll("button[onclick^='goToSlide']");
  dots.forEach((dot, index) => {
    dot.classList.toggle("bg-gray-800", index === currentIndex);
    dot.classList.toggle("bg-gray-300", index !== currentIndex);
  });
}

function prevSlide() {
  const totalSlides = document.querySelectorAll("#carousel > div").length;
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function nextSlide() {
  const totalSlides = document.querySelectorAll("#carousel > div").length;
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}




let = currentIndex = 0;
const teamSlider = document.getElementById('team-slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    teamSlider.style.transform = `translateX(-${currentIndex * 320}px)`;
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < 3) {
    currentIndex++;
    teamSlider.style.transform = `translateX(-${currentIndex * 320}px)`;
  }
});
