




// script.js

// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Modal functionality
const ctaButton = document.getElementById('cta-button');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

ctaButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Form Validation
const form = document.getElementById('sign-up-form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    if (validateEmail(email)) {
        alert('Thank you for signing up!');
        modal.classList.add('hidden');
        form.reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// GSAP Animations
gsap.from('.feature-box', { 
    scrollTrigger: {
        trigger: '.feature-box',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0, 
    y: 50, 
    duration: 1 
});
gsap.utils.toArray('.testimonial-box').forEach(box => {
    gsap.from(box, {
        scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 20,
        duration: 1
    });
});











