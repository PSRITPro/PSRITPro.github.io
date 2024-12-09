// Get elements
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle menu visibility when hamburger icon is clicked
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

function loadHTML(id, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading HTML fragment:', error);
        });
}

// Load the HTML fragments
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header', 'header.html');    
    loadHTML('footer', 'footer.html');
});
