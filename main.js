document.addEventListener('DOMContentLoaded', () => {
    // ... (Il tuo codice per lo smooth scrolling rimane invariato) ...

    // -----------------------------------------------------------------
    // 2. Funzionalità di Filtro del Portfolio
    // -----------------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Funzione per filtrare le card
    const filterProjects = (filterValue) => {
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (filterValue === 'all' || cardCategory === filterValue) {
                card.style.display = 'block'; 
                setTimeout(() => card.style.opacity = 1, 10);
                card.style.pointerEvents = 'auto'; // Riabilita interazione
            } else {
                card.style.opacity = 0;
                card.style.pointerEvents = 'none'; // Disabilita interazione
                setTimeout(() => card.style.display = 'none', 300); 
            }
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            filterProjects(filterValue);
        });
    });
    
    // Attiva il filtro "Tutti" all'avvio per mostrare tutte le card
    filterProjects('all'); 
});