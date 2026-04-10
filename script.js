// HERO SLIDESHOW
const hero = document.querySelector('.hero');

const images = [
  'images/hero1.jpg',
  'images/hero2.jpg',
  'images/hero3.jpeg'
];

let index = 0;

if (hero) {
  hero.style.backgroundImage = `url(${images[0]})`;

  setInterval(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url(${images[index]})`;
  }, 5000);
}

// MOBILE MENU
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
