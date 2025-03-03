import Swiper from "swiper/bundle";

import "swiper/css/bundle";

// let breakpoint_mobile_min = window.matchMedia("(min-width: 768px)"),
//   projectInit = false,
//   projectSlider = Swiper;

// function projectSliderInit() {
//   if (breakpoint_mobile_min.matches) {
//     if (projectInit) {
//       if (document.getElementById("swiper").hasClass("swiper-initialized")) {
//         projectSlider.destroy();
//         projectInit = false;
//       }
//     }
//   } else {
//     if (!projectInit) {
//       projectInit = true;
//       projectSlider = new Swiper("#swiper", {
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//         //loop: true,
//         slidesPerView: 1,
//         spaceBetween: 40,
//         breakpoints: {
//           500: {
//             slidesPerView: 1.5,
//             spaceBetween: 40,
//           },
//         },
//       });
//     }
//   }
// }

// /*  On Load */

// window.addEventListener("load", function() {
//   projectSliderInit();
// });

// /* On Resize */

// window.addEventListener("resize", function() {
//   projectSliderInit();
// });

function initSwiper() {
  let swiper = null;

  function swiperMode() {
    let tablet = window.matchMedia("(min-width: 0px) and (max-width: 1024px)");
    let desktop = window.matchMedia("(min-width: 1025px)");

    // Enable (for mobile)
    if (tablet.matches) {
      if (swiper == null) {
        swiper = new Swiper(".swiper", {
          slidesPerView: 1,
          spaceBetween: 40,
          breakpoints: {
            500: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 4,
            },
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    }

    // Disable (for desktop)
    if (desktop.matches) {
      if (swiper != null) {
        swiper.destroy();

        // document.querySelector(".swiper").classList.remove("swiper");
      }
    }
  }

  /*  On Load */

  window.addEventListener("load", function() {
    console.log("swiper load");
    swiperMode();
  });

  /* On Resize */

  window.addEventListener("resize", function() {
    console.log("swiper resize");
    swiperMode();
  });
}

//export default projectSliderInit;
export default initSwiper;
