// Storage Array History - App Logic

document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('searchBox');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const arrayCards = document.querySelectorAll('.array-card');
    
    // Search functionality
    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        arrayCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            const parentSection = card.closest('.vendor-section');
            
            if (text.includes(searchTerm)) {
                card.classList.remove('hidden');
                parentSection.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
        
        // Hide empty vendor sections
        document.querySelectorAll('.vendor-section').forEach(section => {
            const visibleCards = section.querySelectorAll('.array-card:not(.hidden)');
            if (visibleCards.length === 0) {
                section.classList.add('hidden');
            } else {
                section.classList.remove('hidden');
            }
        });
    });
    
    // Filter button functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            
            arrayCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else if (filter === 'current') {
                    if (card.classList.contains('current')) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                } else if (filter === 'discontinued') {
                    if (card.classList.contains('discontinued')) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
            
            // Reset search
            searchBox.value = '';
            
            // Hide empty vendor sections
            document.querySelectorAll('.vendor-section').forEach(section => {
                const visibleCards = section.querySelectorAll('.array-card:not(.hidden)');
                if (visibleCards.length === 0) {
                    section.classList.add('hidden');
                } else {
                    section.classList.remove('hidden');
                }
            });
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
