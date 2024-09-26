// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change navbar color on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Section animations on scroll
const animatedSections = document.querySelectorAll('.animate-slide-up, .animate-fade');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
        }
    });
});

animatedSections.forEach(section => {
    observer.observe(section);
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        e.preventDefault();
        alert('Please fill out all fields before submitting.');
    }
});

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        dots[index].classList.remove('active-dot');
    });

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active-dot');

    setTimeout(showSlides, 4000); // Change image every 4 seconds
}