// document.addEventListener("DOMContentLoaded", function() {
//     const accordionItems = document.querySelectorAll(".accordion-item");

//     accordionItems.forEach(item => {
//       const title = item.querySelector(".accordion-title");
//       title.addEventListener("click", () => {
//         const content = item.querySelector(".accordion-content");
//         const icon = title.querySelector("i");
//         const isOpen = content.style.display === "block";

//         // Close all other accordion contents and reset icons
//         document.querySelectorAll(".accordion-content").forEach(content => {
//           content.style.display = "none";
//         });
//         document.querySelectorAll(".accordion-title i").forEach(icon => {
//           icon.style.transform = "rotate(0deg)";
//         });

//         // Open the clicked accordion item and rotate the icon
//         if (!isOpen) {
//           content.style.display = "block";
//           icon.style.transform = "rotate(90deg)";
//         }
//       });
//     });
//   });

// document.addEventListener("DOMContentLoaded", function() {
//   const accordionItems = document.querySelectorAll(".accordion-item");

//   accordionItems.forEach(item => {
//     const title = item.querySelector(".accordion-title");
//     const content = item.querySelector(".accordion-content");
//     const icon = title.querySelector("i");

//     // Initialize the max-height to 0
//     content.style.maxHeight = '0';

//     title.addEventListener("click", () => {
//       const isOpen = content.style.maxHeight !== '0px';

//       // Close all other accordion contents and reset icons
//       accordionItems.forEach(otherItem => {
//         const otherContent = otherItem.querySelector(".accordion-content");
//         const otherIcon = otherItem.querySelector(".accordion-title i");
//         otherContent.style.maxHeight = '0';
//         otherIcon.style.transform = "rotate(0deg)";
//       });

//       // Open the clicked accordion item and rotate the icon
//       if (!isOpen) {
//         content.style.maxHeight = content.scrollHeight + 'px';
//         icon.style.transform = "rotate(90deg)";
//       } else {
//         content.style.maxHeight = '0';
//         icon.style.transform = "rotate(0deg)";
//       }
//     });
//   });
// });


// for menu
document.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.querySelector('.navbarToggler');
  const navCross = document.querySelector('.navCross');
  const navbarCollapse = document.querySelector('.navbarCollapse');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('open');
    overlay.classList.toggle('show');
  });

  navCross.addEventListener('click', () => {
    navbarCollapse.classList.remove('open');
    overlay.classList.remove('show');
  });

  overlay.addEventListener('click', () => {
    navbarCollapse.classList.remove('open');
    overlay.classList.remove('show');
  });

  document.addEventListener('click', (event) => {
    if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
      navbarCollapse.classList.remove('open');
      overlay.classList.remove('show');
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navbarCollapse.classList.remove('open');
      overlay.classList.remove('show');
    });
  });
});


// counter


document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const valueElement = counter.querySelector('.counter-value');

    let count = 0;
    const speed = 50; // Change this value to control the speed of the animation

    const updateCounter = () => {
      if (count < target) {
        count++;
        valueElement.textContent = count;
        setTimeout(updateCounter, speed);
      } else {
        valueElement.textContent = target;
      }
    };

    updateCounter();
  });
});


// sponsored by section
const swiper = new Swiper('.sponsorCarousel', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, // Pause autoplay when hovering over the slider
  },
  breakpoints: {
    0: {   // For small screens (e.g. mobile)
      slidesPerView: 2,
      spaceBetween: 10,
    },
    600: { // For medium screens (e.g. tablets)
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1000: { // For large screens (e.g. desktops)
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
});

// media partner carousel
const mediaPartnerCarousel = new Swiper('.mediaPartnerCarousel', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, // Pause autoplay when hovering over the slider
    reverseDirection: true, // Play in reverse
  },
  breakpoints: {
    0: {   // For small screens (e.g. mobile)
      slidesPerView: 2,
      spaceBetween: 10,
    },
    600: { // For medium screens (e.g. tablets)
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1000: { // For large screens (e.g. desktops)
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
});


// committe section
const committeCarousel = new Swiper('.committeCarousel', {
  loop: true, // Enable looping
  autoplay: {
    delay: 3000, // 3-second delay between slides
    disableOnInteraction: false, // Keep autoplay active after user interaction
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.swiper-pagination', // Element for pagination
    clickable: true, // Allow users to click on pagination bullets
  },
  breakpoints: {
    0: { // Small screens
      slidesPerView: 2,
      spaceBetween: 10,
    },
    800: { // Medium screens
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1000: { // Large screens
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
});


// for sponsor packages

const sponsoreCarousel = new Swiper('.sponsoreCarousel', {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 3000, // 3-second delay between slides
    disableOnInteraction: false, // Keep autoplay active after user interaction
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
});
