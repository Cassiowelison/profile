// Skill percentage circles
document.querySelectorAll('.skill-circle').forEach((circle) => {
  const percent = circle.getAttribute('data-percent');
  circle.style.background = `conic-gradient(#42c9ff 0% ${percent}%, #1a1a1a ${percent}% 100%)`;
});

// FAQ toggle
document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');
  });
});

// Contact Modal Toggle
const modal = document.getElementById('contactModal');
const openBtn = document.querySelector('.hire');
const closeBtn = document.getElementById('closeModal');
const successPopup = document.getElementById('successPopup');
const contactForm = document.querySelector('#contactModal form');

if (openBtn && modal && closeBtn && contactForm) {
  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';   
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Form submit handler
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.reset();
    modal.style.display = 'none';

    // Show success popup
    successPopup.style.display = 'flex';

    // Hide it after 3 seconds
    setTimeout(() => {
      successPopup.style.display = 'none';
    }, 3000);
  });
}
// Close success popup
const closeSuccessPopup = document.getElementById('closeSuccessPopup');
if (closeSuccessPopup) {
  closeSuccessPopup.addEventListener('click', () => {
    successPopup.style.display = 'none';
  });
}
// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Show button on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
}
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
// Responsive navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('bx-x');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('bx-x');
    });
  });
}
// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true, // Animation only happens once
  mirror: false // Do not animate elements when scrolling back up
});
// Initialize Swiper for testimonials
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});
// Initialize Typed.js for typing effect
const typed = new Typed('.typed-text', {
  strings: [
    'Web Developer',
    'UI/UX Designer',
    'Freelancer',
    'Tech Enthusiast'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
  showCursor: false
});
// Initialize CountUp.js for skill counters
document.querySelectorAll('.count-up').forEach((element) => {
  const countUp = new CountUp(element, element.getAttribute('data-count'), {
    duration: 2,
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.'
  });
  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }
});
// Initialize Isotope for portfolio filtering
const isoContainer = document.querySelector('.portfolio-items');
if (isoContainer) {
  const iso = new Isotope(isoContainer, {
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  // Filter items on button click
  document.querySelectorAll('.portfolio-filter button').forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });
      document.querySelector('.portfolio-filter .active').classList.remove('active');
      button.classList.add('active');
    });
  });
}
// Initialize Lightbox for portfolio images
const lightbox = GLightbox({
  selector: '.portfolio-item a',
  loop: true,
  zoomable: true,
  draggable: true,
  autoplayVideos: true
});
// Initialize WOW.js for scroll animations
new WOW().init();
// Initialize Smooth Scroll for anchor links
const smoothScroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
  offset: 70 // Adjust based on your header height
});
// Initialize ScrollReveal for section animations
ScrollReveal().reveal('.reveal', {
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 100 // Delay between each element
});

