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
    loadHTML('left-sidebar', 'left-sidebar.html');
    loadHTML('right-sidebar', 'right-sidebar.html');
    loadHTML('footer', 'footer.html');
});
