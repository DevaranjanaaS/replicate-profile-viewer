
// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the profile link and modal elements
  const profileLink = document.getElementById('profileLink');
  const profileModal = new bootstrap.Modal(document.getElementById('profileModal'));
  
  // Add click event listener to the profile link
  profileLink.addEventListener('click', function(e) {
    e.preventDefault();
    profileModal.show();
  });
  
  // Animation for elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .portfolio-item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Initial setup for animations
  const setupAnimations = function() {
    const elements = document.querySelectorAll('.service-card, .portfolio-item');
    
    elements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(40px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
  };
  
  // Setup animations and run on scroll
  setupAnimations();
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.profile-link)');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
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
      
      // Hide navbar collapse on mobile
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
});
