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




<<<<<<< HEAD
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
=======
function toggleModal() {
  const modal = document.getElementById('loginModal');
  const backdrop = document.getElementById('modalBackdrop');
  modal.classList.toggle('hidden');
  backdrop.classList.toggle('hidden');
}

function togglePassword() {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
}
>>>>>>> 4acaa11be0b1daa70dd500999818b9a95317b619
