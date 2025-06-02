// Animation JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Fade-in animations on scroll
    const animateElements = document.querySelectorAll('.animate');
    const fadeInUpElements = document.querySelectorAll('.fade-in-up');
    
    // Initial check for elements in viewport
    checkVisibility(animateElements);
    checkVisibility(fadeInUpElements);
    
    // Add 'show' class to elements when they enter the viewport
    function checkVisibility(elements) {
        elements.forEach(element => {
            // Check if element is already visible
            if (element.classList.contains('show')) return;
            
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // If element is in viewport, add 'show' class
            if (elementTop < windowHeight * 0.9) {
                element.classList.add('show');
            }
        });
    }
    
    // Check visibility on scroll
    window.addEventListener('scroll', function() {
        checkVisibility(animateElements);
        checkVisibility(fadeInUpElements);
    });
    
    // Scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);
    
    window.addEventListener('scroll', function() {
        const windowScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (windowScroll / height) * 100;
        
        scrollIndicator.style.width = scrolled + '%';
    });
    
    // Animated underline effect for nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            link.style.color = 'var(--primary-color)';
        });
        
        link.addEventListener('mouseleave', function() {
            link.style.color = 'var(--text-color)';
        });
    });
    
    // Animate hero section when page loads
    const heroElements = document.querySelectorAll('.hero .animate');
    
    setTimeout(() => {
        heroElements.forEach(element => {
            element.classList.add('show');
        });
    }, 300);
    
    // Update active section in navbar
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveSection() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLink.style.color = 'var(--primary-color)';
                    navLink.style.fontWeight = '700';
                } else {
                    navLink.style.color = 'var(--text-color)';
                    navLink.style.fontWeight = '500';
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add custom CSS for scroll indicator
const style = document.createElement('style');
style.textContent = `
    .scroll-indicator {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background-color: var(--primary-color);
        z-index: 9999;
        width: 0;
        transition: width 0.1s ease;
    }
`;
document.head.appendChild(style);