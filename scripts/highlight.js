document.addEventListener('DOMContentLoaded', (event) => {
    // Listen for clicks on links with hrefs starting with "#"
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Remove highlight class from any previously highlighted spans
            document.querySelectorAll('.highlight').forEach(highlighted => {
                highlighted.classList.remove('highlight');
            });

            // Add the highlight class to the clicked link's target span
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.classList.add('highlight');

                // Optional: Scroll to the element if not in view
                targetElement.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
        });
    });

    // Optional: Remove highlight if clicking anywhere else on the page
    document.body.addEventListener('click', function(e) {
        if (!e.target.matches('a[href^="#"]')) {
            document.querySelectorAll('.highlight').forEach(highlighted => {
                highlighted.classList.remove('highlight');
            });
        }
    });
});
