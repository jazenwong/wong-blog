document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('nav'); // Selects the <nav> element
    var toggleButton = document.querySelector('.mobile-toggle'); // Selects the toggle button outside nav
    var closeButton = document.getElementById('closeNav'); // Selects the new close button inside nav

    // Function to toggle the navigation visibility
    function toggleNav() {
        nav.classList.toggle('active');
    }

    // Event listener for the external toggle button
    toggleButton.addEventListener('click', toggleNav);

    // Event listener for the close button inside the navigation
    closeButton.addEventListener('click', toggleNav);
});
