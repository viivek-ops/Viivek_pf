document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default hash behavior (instant jump)

            // Get the target section's ID from the href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Calculate the position to scroll to
                // We subtract the navbar height for a clean scroll-to-view experience
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                // Use the window.scrollTo method for a smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' // This is the key for the smooth effect
                });
            }
        });
    });
});
