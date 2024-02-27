document.addEventListener('DOMContentLoaded', (event) => {
    let currentActiveId = null; // Track the currently active footnote ID

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            // If the clicked link is the same as the current, do nothing further
            if (currentActiveId === targetId) return;

            // Clear existing highlights and return links if clicking a different footnote
            if (currentActiveId !== null && currentActiveId !== targetId) {
                const previouslyActiveElement = document.querySelector(currentActiveId);
                if (previouslyActiveElement) {
                    previouslyActiveElement.classList.remove('highlight');
                    const returnLink = previouslyActiveElement.querySelector('.return-link');
                    if (returnLink) {
                        returnLink.remove();
                    }
                }
            }

            // Update the current active ID
            currentActiveId = targetId;

            // Handle new highlight and return link
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.classList.add('highlight');

                // Create and insert the return link, if not already present
                if (!targetElement.querySelector('.return-link')) {
                    const returnLink = document.createElement('a');
                    returnLink.href = '#';
                    returnLink.textContent = 'Return to position.';
                    returnLink.className = 'return-link';
                    returnLink.onclick = () => {
                        document.querySelector(`a[href="${targetId}"]`).scrollIntoView({behavior: 'smooth', block: 'center'});
                        return false; // Prevent default link behavior
                    };

                    targetElement.append(returnLink);
                }

                targetElement.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
        });
    });
});
