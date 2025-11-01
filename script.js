// Smooth fading hero slider
const slides = [
  'images/hero1.jpg',
  'images/hero2.jpg',
  'images/hero3.jpeg'
];

let current = 0;
let slide1 = document.querySelector('.slide1');
let slide2 = document.querySelector('.slide2');
let showingSlide1 = true;

// Initialize
slide1.style.backgroundImage = `url('${slides[0]}')`;
slide1.classList.add('active');
slide2.style.backgroundImage = `url('${slides[1]}')`;

setInterval(() => {
  showingSlide1 = !showingSlide1;

  if (showingSlide1) {
    slide1.style.backgroundImage = `url('${slides[current]}')`;
    slide1.classList.add('active');
    slide2.classList.remove('active');
  } else {
    slide2.style.backgroundImage = `url('${slides[current]}')`;
    slide2.classList.add('active');
    slide1.classList.remove('active');
  }

  current = (current + 1) % slides.length;
}, 5000);
