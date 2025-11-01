// Placeholder for future animations or effects
console.log("DOME site loaded.");

// Hero slider with smooth switch
const hero = document.querySelector('.hero');
const heroImages = [
  'images/hero1.jpg',
  'images/hero2.jpg',
  'images/hero3.jpeg'
];

let currentIndex = 0;

function changeHeroImage() {
  currentIndex = (currentIndex + 1) % heroImages.length;
  hero.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
}

// Switch every 5 seconds
setInterval(changeHeroImage, 5000);

