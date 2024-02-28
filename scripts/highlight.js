document.addEventListener('DOMContentLoaded', (event) => {
    let currentActiveId = null; // Track the currently active footnote ID
    let returnPosition = null; // Track the return position

    const clearHighlightsAndReturnLinks = () => {
        // Clear any existing highlights and return links
        document.querySelectorAll('.highlight').forEach(highlight => {
            highlight.classList.remove('highlight');
            const returnLink = highlight.querySelector('.return-link');
            if (returnLink) {
                returnLink.remove();
            }
        });
    };

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            // Save the scroll position before moving to the footnote
            returnPosition = window.pageYOffset || document.documentElement.scrollTop;

            // Clear existing highlights and return links if clicking a different footnote
            if (currentActiveId !== targetId) {
                clearHighlightsAndReturnLinks();
            }

            // Update the current active ID
            currentActiveId = targetId;

            // Handle new highlight and return link
            const targetElement = document.querySelector(targetId);
            if (targetElement && !targetElement.classList.contains('highlight')) {
                targetElement.classList.add('highlight');

                // Create and insert the return link, if not already present
                const returnLink = document.createElement('a');
                returnLink.href = 'javascript:void(0);'; // Prevent navigating away
                returnLink.textContent = 'Return to position.';
                returnLink.className = 'return-link';
                returnLink.onclick = (e) => {
                    e.preventDefault(); // Ensure the link does not perform any default action
                    window.scrollTo({top: returnPosition, behavior: 'smooth'});
                    clearHighlightsAndReturnLinks(); // Clear highlights when returning
                };

                targetElement.append(returnLink);
                targetElement.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
        });
    });
});