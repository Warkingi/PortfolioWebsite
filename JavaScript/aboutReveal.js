(() => {
    // Keep the content visible when motion is reduced or observation is unavailable.
    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const rows = document.querySelectorAll('.aboutStories .aboutRow');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                entry.target.dataset.reveal = 'visible';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -48px 0px'
    });

    rows.forEach(row => {
        row.dataset.reveal = 'pending';
        observer.observe(row);
    });
})();
