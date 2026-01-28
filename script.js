document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('serviceSearch');
    const cards = document.querySelectorAll('.service-card');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        cards.forEach(card => {
            // Get title and description text
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();
            
            // Check if search term exists in title or description
            if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Simple Mobile Menu Alert (Placeholder for real menu logic)
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', () => {
        alert("Mobile menu toggle would expand here!");
    });
});