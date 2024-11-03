const hamburger = document.querySelector(".hamburger");
const hamburgerIconClosed = document.querySelector(".open-menu");
const hamburgerIconOpened = document.querySelector(".close-menu");
const toolbar = document.querySelector(".toolbar");
const homeButton = document.querySelector(".home-button");
const navbarSection = document.querySelector('.navbar');

hamburger.addEventListener("click", () => {
  const isActive = toolbar.classList.toggle("active");
  toggleIcons(isActive);
});

function toggleIcons(isActive) {
  hamburgerIconOpened.style.display = isActive ? "block" : "none";
  hamburgerIconClosed.style.display = isActive ? "none" : "block";
}

[hamburgerIconClosed, hamburgerIconOpened].forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.style.animation = "rotation 1s";
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 650) {
    homeButton.style.display = "block";
  } else {
    homeButton.style.display = "none";
  }
});
