// This file contains additional UI-related scripts, such as animations or interactive elements.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    }
});