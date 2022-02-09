const menuButton = document.querySelector(".menu-button");
const burgerButton = document.querySelector(".menu-button-burger");
const navbar = document.querySelector(".navbar");
const navbarItems = document.querySelectorAll(".navbar-item");
const navbarMenu = document.querySelector(".navbar-menu");

let showMenu = false;

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    burgerButton.classList.add("open");
    navbar.classList.add("open");
    navbarMenu.classList.add("open");
    navbarItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    burgerButton.classList.remove("open");
    navbar.classList.remove("open");
    navbarMenu.classList.remove("open");
    navbarItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}
