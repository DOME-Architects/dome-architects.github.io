const hero = document.querySelector('.hero');

const images = [
  'images/hero1.jpg',
  'images/hero2.jpg'
];

let i = 0;

if (hero) {
  hero.style.backgroundImage = `url(${images[0]})`;

  setInterval(() => {
    i = (i + 1) % images.length;
    hero.style.backgroundImage = `url(${images[i]})`;
  }, 5000);
}
