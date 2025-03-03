import mobileNav from "./modules/mobile-nav.js";
mobileNav();

import initSwiper from "./modules/swiper.js";
initSwiper();

import initTimer from "./modules/timer.js";
initTimer();

const cards = document.querySelectorAll(".card");
const cardBtns = document.querySelectorAll(".card__btn");
console.log(cardBtns);
cardBtns.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.classList.add("card__btn--active");
    btn.closest(".card").classList.add("card--active");
  });
  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("card__btn--active");
    btn.closest(".card").classList.remove("card--active");
  });
});

const windowInnerWidth = window.innerWidth;

function changeCardStatus() {
  cards.forEach((card) => {
    if (windowInnerWidth < 767) {
      card.classList.add("card--active");
    } else {
      card.classList.remove("card--active");
    }
  });
}
window.addEventListener("load", function() {
  changeCardStatus();
});

window.addEventListener("resize", function() {
  changeCardStatus();
});
