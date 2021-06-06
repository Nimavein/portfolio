const menuButton = document.querySelector(".menu-button");
const burgerButton = document.querySelector(".menu-button-burger");
const navbar = document.querySelector(".navbar");

let showMenu = false;

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuButton.classList.add("open");
    burgerButton.classList.add("open");
    navbar.classList.add("open");
    showMenu = true;
  } else {
    menuButton.classList.remove("open");
    burgerButton.classList.remove("open");
    navbar.classList.remove("open");
    showMenu = false;
  }
}
