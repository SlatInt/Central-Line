"use strict";

//////////////// NAVBAR MENU
function menuToggle() {
  let nav = document.getElementById("nav");
  let toggle = document.getElementById("toggle");
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
}

//////////////// SCROLLING-RELATED BEHAVIOUR
//move logo on scroll down once
window.onscroll = function () {
  scrollFunction();
  moveLogo();
};

//button back to top
let toTopBtn = document.getElementById("back-to-top");

//button show/hide
function scrollFunction() {
  document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
    ? (toTopBtn.style.display = "block")
    : (toTopBtn.style.display = "none");
}

// scroll to top
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Move label/logo on the scroll once
let logoLabel = document.getElementById("logoLabel");
function moveLogo() {
  logoLabel.classList.add('slide-left');
}