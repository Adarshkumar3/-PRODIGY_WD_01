// Burger Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Parallax Scrolling Effect
window.addEventListener('scroll', () => {
  const parallax = document.querySelector('.parallax');
  let scrollPosition = window.pageYOffset;

  parallax.style.transform = 'translateY(' + scrollPosition * 0.6 + 'px)';
});