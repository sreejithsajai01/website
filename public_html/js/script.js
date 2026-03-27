// Dynamically adjust hero/page-header margin-top to match fixed header height
function adjustHeroOffset() {
  const topBar = document.querySelector('.top-bar');
  const header = document.querySelector('header');
  const hero = document.querySelector('.hero');
  const pageHeader = document.querySelector('.page-header');
  if (!topBar || !header) return;
  const offset = topBar.offsetHeight + header.offsetHeight;
  if (hero) hero.style.marginTop = offset + 'px';
  if (pageHeader) pageHeader.style.marginTop = offset + 'px';
}

document.addEventListener('DOMContentLoaded', adjustHeroOffset);
window.addEventListener('load', adjustHeroOffset);
window.addEventListener('resize', adjustHeroOffset);

// Hide native scrollbar globally
(function() {
  const style = document.createElement('style');
  style.textContent = '::-webkit-scrollbar { width: 0 !important; height: 0 !important; display: none !important; } * { scrollbar-width: none !important; -ms-overflow-style: none !important; }';
  document.head.appendChild(style);
})();

// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');
const dropdowns = document.querySelectorAll('.nav-menu .dropdown');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Mobile dropdown toggle
dropdowns.forEach(dropdown => {
  const dropdownLink = dropdown.querySelector('a');
  dropdownLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      dropdown.classList.toggle('active');
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
});

// Close mobile menu when clicking on dropdown item
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
dropdownLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    dropdowns.forEach(d => d.classList.remove('active'));
  });
});

// School Network Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.school-card');
const totalSlides = slides.length;

function getBorderColor(board) {
  switch(board) {
    case 'state':
    case 'cbse':
      return '#f4c430'; // yellow
    case 'icse':
    case 'management':
      return '#3b82f6'; // blue
    default:
      return 'white';
  }
}

function updateSlider() {
  slides.forEach((slide, index) => {
    let offset = index - currentSlide;
    
    // Wrap around
    if (offset > totalSlides / 2) offset -= totalSlides;
    if (offset < -totalSlides / 2) offset += totalSlides;
    
    const isCenter = offset === 0;
    const absOffset = Math.abs(offset);
    
    // Position and style
    const translateX = offset * 320;
    const translateZ = isCenter ? 0 : -200 * absOffset;
    const scale = isCenter ? 1.2 : 1 - absOffset * 0.2;
    const rotateY = offset * -15;
    const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.3;
    const zIndex = isCenter ? 100 : 10 - absOffset;
    
    slide.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`;
    slide.style.opacity = opacity;
    slide.style.zIndex = zIndex;
    slide.style.pointerEvents = absOffset > 2 ? 'none' : 'auto';
    
    // Update border color and center class
    if (isCenter) {
      slide.classList.add('center');
      const board = slide.getAttribute('data-board');
      slide.style.borderColor = getBorderColor(board);
    } else {
      slide.classList.remove('center');
      slide.style.borderColor = 'white';
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
}

// Initialize slider
if (slides.length > 0) {
  updateSlider();
  
  // Auto-play
  setInterval(nextSlide, 3000);
  
  // Navigation buttons
  const prevBtn = document.querySelector('.slider-nav.prev');
  const nextBtn = document.querySelector('.slider-nav.next');
  
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add active class to current nav item
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentLocation || 
      (currentLocation.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
    link.style.color = 'var(--secondary)';
  }
});

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--secondary);
  color: var(--primary);
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: none;
  z-index: 1000;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Form validation (if contact form exists)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;
    
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    if (!email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
}


// FAQ Toggle Function
function toggleFaq(button) {
  const faqItem = button.parentElement;
  const answer = faqItem.querySelector('.faq-answer');
  const icon = button.querySelector('i');
  const isOpen = answer.style.display === 'block';
  
  // Close all other FAQs
  document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
  document.querySelectorAll('.faq-question i').forEach(i => i.style.transform = 'rotate(0deg)');
  document.querySelectorAll('.faq-question').forEach(q => q.style.background = 'white');
  
  // Toggle current FAQ
  if (!isOpen) {
    answer.style.display = 'block';
    icon.style.transform = 'rotate(180deg)';
    button.style.background = 'rgba(61, 90, 128, 0.05)';
  }
}

// Admission Enquiry Popup
function closePopup() {
  const popup = document.getElementById('admissionPopup');
  if (popup) {
    popup.classList.add('hidden');
  }
}

// Show popup on page load (only on homepage)
window.addEventListener('load', () => {
  const popup = document.getElementById('admissionPopup');
  if (popup && window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    setTimeout(() => {
      popup.classList.remove('hidden');
    }, 1000); // Show after 1 second
  }
});

// Close popup when clicking outside
const popupOverlay = document.getElementById('admissionPopup');
if (popupOverlay) {
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      closePopup();
    }
  });
}
