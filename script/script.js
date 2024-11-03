const hamburger = document.querySelector(".hamburger");
const barIcon = document.querySelector(".fa-bars");
const xmarkIcon = document.querySelector(".fa-xmark");
const toolbar = document.querySelector(".toolbar");
const homeButton = document.querySelector(".home-button");
const navbarSection = document.querySelector('.navbar');

hamburger.addEventListener("click", () => {
  const isActive = toolbar.classList.toggle("active");
  toggleIcons(isActive);
});

function toggleIcons(isActive) {
  xmarkIcon.style.display = isActive ? "block" : "none";
  barIcon.style.display = isActive ? "none" : "block";
}

barIcon.addEventListener("click", () => {
  barIcon.style.animation = "rotation 1s";
});

xmarkIcon.addEventListener("click", () => {
  xmarkIcon.style.animation = "rotation 1s";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 650) {
    homeButton.style.display = "block";
  } else {
    homeButton.style.display = "none";
  }
});
