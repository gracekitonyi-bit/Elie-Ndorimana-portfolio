// script.js
const nav = document.querySelector(".nav-links");
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  nav.classList.toggle("active");
});
