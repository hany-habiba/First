document.addEventListener("DOMContentLoaded", function () {
  const homeSection = document.querySelector('.Home');
  const images = [
    'ph1.webp',
    'ph3.webp',
    'ph2.webp',
    'ph4.webp', 
    'ph5.webp', 
    'ph6.webp'
  ];

  let currentImageIndex = 0;

  homeSection.style.backgroundImage = `url(ph.webp)`;

  setInterval(() => {
    homeSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }, 3000);
});



const toggle = document.getElementById("toggle");
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

function closeNavbar(e) {
  if (
    document.body.classList.contains("show-nav") &&
    e.target !== toggle &&
    !toggle.contains(e.target) &&
    e.target !== navbar &&
    !navbar.contains(e.target)
  ) {
    document.body.classList.toggle("show-nav");
    document.body.removeEventListener("click", closeNavbar);
  } else if (!document.body.classList.contains("show-nav")) {
    document.body.removeEventListener("click", closeNavbar);
  }
}

// Menu Slider
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
  document.body.addEventListener("click", closeNavbar);
});

