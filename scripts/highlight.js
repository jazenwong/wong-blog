document.addEventListener('DOMContentLoaded', (event) => {
    let currentActiveId = null; // Track the currently active footnote ID

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
                returnLink.href = '#';
                returnLink.textContent = 'Return to position.';
                returnLink.className = 'return-link';
                returnLink.onclick = () => {
                    document.querySelector(`a[href="${targetId}"]`).scrollIntoView({behavior: 'smooth', block: 'center'});
                    clearHighlightsAndReturnLinks(); // Clear highlights when returning
                    return false; // Prevent default link behavior
                };

                targetElement.append(returnLink);
                targetElement.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
        });
    });
});
