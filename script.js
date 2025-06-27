// ====== Slideshow Functionality ======
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll('.mySlides');
  slides.forEach(slide => (slide.style.display = 'none'));
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = 'block';
  }
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// ====== Mobile Menu Toggle ======
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when a navigation link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

});