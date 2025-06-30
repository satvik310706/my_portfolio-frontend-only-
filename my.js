// Enhanced Portfolio JavaScript with Modern Features and Animations

// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Global variables
let isNavbarOpen = false;
let currentSection = 'hero';

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// Main initialization function
function initializePortfolio() {
    initializeTypedText();
    initializeNavigation();
    initializeScrollEffects();
    initializeProjects();
    initializeSkills();
    initializeAnimations();
    initializeContactForm();
    initializeIntersectionObserver();
}

// Initialize Typed.js for hero section
function initializeTypedText() {
    new Typed('#typed', {
        strings: [
            "Full Stack Developer",
            "Web Developer", 
            "Tech Enthusiast",
            "Python Coder",
            "Creative Designer",
            "Frontend Developer",
            "Problem Solver",
            "UI/UX Designer"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500
    });
}

// Enhanced Navigation System
 const navbar = document.getElementById('navbar');
        const logo = document.getElementById('logo');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 20;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random positioning
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                // Random animation delay
                particle.style.animationDelay = Math.random() * 6 + 's';
                
                // Random size variation
                const size = Math.random() * 3 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                particlesContainer.appendChild(particle);
            }
        }

        // Logo click animation
        logo.addEventListener('click', () => {
            logo.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                logo.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        });

        // Smooth scrolling for navigation links
       // Smooth scrolling for navigation links (FIXED)
document.querySelectorAll('.nav-link a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});


        // Initialize particles
        createParticles();

        // Add subtle mouse movement effect to navbar
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            // Subtle parallax effect on navbar
            navbar.style.transform = `translateX(${mouseX * 5}px) translateY(${mouseY * 2}px)`;
        });
//stats


// Projects data and initialization
// Skills data and initialization

// Contact form functionality

// Performance optimizations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Handle scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'https://res.cloudinary.com/dgtfoqrjo/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1740811422/me2_ogss2z.jpg'
    ];

    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();

// Error handling
window.addEventListener('error', (e) => {
    console.error('Portfolio Error:', e.error);
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for global access
window.removeSection = removeSection;