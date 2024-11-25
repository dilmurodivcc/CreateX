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
