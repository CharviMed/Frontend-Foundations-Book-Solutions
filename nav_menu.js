// Select the hamburger menu and navigation menu elements
document.getElementById('hamburger').addEventListener('click', function() {
    // Toggle the 'active' class on the hamburger and nav-menu elements
    this.classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
});
