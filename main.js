// Initialize ScrollReveal
ScrollReveal().reveal('.carousel-caption', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    duration: 1000
});

// Chat Support Interaction
document.querySelector('.chat-support').addEventListener('click', function () {
    alert("Our chat support is currently unavailable. Please contact us via phone or email.");
});

// Initialize Carousel
const heroCarousel = new bootstrap.Carousel('#heroCarousel', {
    interval: 5000,
    wrap: true
});

// GSAP Animations for Offer Cards
document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".offer-card", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });
});

