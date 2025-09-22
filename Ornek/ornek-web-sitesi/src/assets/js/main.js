// This file contains the main functionality for the website, such as event listeners and DOM manipulation.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a click event listener to a button
    const exampleButton = document.getElementById('exampleButton');
    if (exampleButton) {
        exampleButton.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }

    // Example: Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});