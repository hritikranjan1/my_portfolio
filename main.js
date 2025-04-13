// Typed.js initialization
var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Developer", "Programmer", "Coder", "Artist"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Close menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
  });
});

// Sticky header on scroll
window.onscroll = () => {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);
  
  // Remove menu when scrolling
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Scroll reveal animation
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Form submission
const form = document.querySelector('.contact-form form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const subject = form.querySelectorAll('input[type="text"]')[1].value;
  const phone = form.querySelectorAll('input[type="text"]')[2].value;
  const message = form.querySelector('textarea').value;
  
  // Here you would typically send this data to a server
  console.log({ name, email, subject, phone, message });
  
  // Show success message
  alert('Message sent successfully!');
  form.reset();
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: 'smooth'
          });
      }
  });
});

// Back to top button visibility
const backToTopButton = document.querySelector('.top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});

// Dark/Light mode toggle (optional)
const themeToggle = document.createElement('div');
themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
themeToggle.classList.add('theme-toggle');
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const icon = themeToggle.querySelector('i');
  if (document.body.classList.contains('light-mode')) {
      icon.classList.replace('bx-moon', 'bx-sun');
  } else {
      icon.classList.replace('bx-sun', 'bx-moon');
  }
});