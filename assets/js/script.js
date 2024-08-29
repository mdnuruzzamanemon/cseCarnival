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


// citaitons
const counters = document.querySelectorAll(".metric-counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const totalDuration = 2000; // Total duration for all counters to complete in milliseconds
    let increment;
    let delay;

    if (target < 50) {
      increment = 1;
      delay = totalDuration / target; // Calculate delay based on target and total duration
    } else {
      increment = target / (totalDuration / 20); // Calculate increment based on target and total duration
      delay = 20; // Normal delay for higher values
    }

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, delay);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});







