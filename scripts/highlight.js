document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove any existing return link and highlight
            document.querySelectorAll('.highlight').forEach(highlighted => {
                highlighted.classList.remove('highlight');
                const returnLink = highlighted.querySelector('.return-link');
                if (returnLink) {
                    returnLink.remove();
                }
            });

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.classList.add('highlight');
                
                // Create and insert the return link
                const returnLink = document.createElement('a');
                returnLink.href = '#';
                returnLink.textContent = 'Return to original position.';
                returnLink.className = 'return-link';

                returnLink.onclick = () => {
                    this.scrollIntoView({behavior: 'smooth', block: 'center'});
                    return false; // Prevent default link behavior
                };
                
                targetElement.append(returnLink);
                
                targetElement.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
        });
    });

    document.body.addEventListener('click', function(e) {
        // Extend to remove return link if clicking outside of footnotes
        if (!e.target.matches('a[href^="#"], .return-link')) {
            document.querySelectorAll('.highlight').forEach(highlighted => {
                highlighted.classList.remove('highlight');
                const returnLink = highlighted.querySelector('.return-link');
                if (returnLink) {
                    returnLink.remove();
                }
            });
        }
    });
});
