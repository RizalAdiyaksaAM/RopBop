const btnRes = document.querySelector(".nav-btn-responsive");
const menu = document.querySelector(".nav-menu");

btnRes.addEventListener("click", () => {
  menu.classList.toggle("active");
  btnRes.classList.toggle("cross");
});


const counters = document.querySelectorAll(".counter span");
const container = document.querySelector(".counters");

let activated = false;

window.addEventListener("scroll", () => {
  if (
    pageYOffset > container.offsetTop - container.offsetHeight - 200 &&
    activated === false
  ) {
    counters.forEach((counter) => {
      let count = 0;
      const target = parseInt(counter.dataset.count);
      
      function updateCount() {
        if (count < target) {
          count++;
          counter.innerText = count;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      }

      updateCount();
    });

    activated = true; // Set to true to ensure the counting only happens once.
  }
});


var swiper = new Swiper(".testimoni-bottom", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
    //   disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-prev",
      prevEl: ".swiper-button-next",
    },
});

window.addEventListener("scroll", function () {
    let navbar = document.getElementsByClassName("navbar")[0];
    // let navMenu = this.document.getElementById("nav-menu");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    //   navMenu.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    //   navMenu.classList.remove("scrolled");
    }
  });

  AOS.init({
    disable: function () {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    },
    duration: 1000,
    easing: "ease-in-out", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom",
  });

  // GSAP

//   document.addEventListener("DOMContentLoaded", function() {
//     gsap.to("#animateButton", {
//       duration: 1,
//       scale: 1.1,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut"
//     });
//   });

//   gsap.registerPlugin(ScrollTrigger);

// const horizontalSections = document.querySelectorAll('.horizontal');

// horizontalSections.forEach((sec) => {
//   const pinWrap = sec.querySelector('.pin-wrap');
//   const animWrap = pinWrap.querySelector('.animation-wrap');

//   const getToValue = () => -(animWrap.scrollWidth - window.innerWidth);

//   gsap.fromTo(animWrap, { 
//     x: 0 
//   }, { 
//     x: getToValue,
//     ease: "none",
//     scrollTrigger: {
//       trigger: sec,
//       start: "top top",
//       end: () => "+=" + (animWrap.scrollWidth - window.innerWidth),
//       pin: pinWrap,
//       scrub: true,
//       invalidateOnRefresh: true
//     }
//   });
// });
