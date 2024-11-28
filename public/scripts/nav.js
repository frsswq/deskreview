// hamburger
const hamburger = document.querySelector("#hamburger");
const nav_menu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  nav_menu.classList.toggle("hidden");
});

// navbar

window.onscroll = () => {
  const header = document.querySelector("header");
  const fixed_nav = header.offsetTop;

  if (window.pageYOffset > fixed_nav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
