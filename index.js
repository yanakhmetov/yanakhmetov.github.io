document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Simple parallax effect for bg-gradient
    window.addEventListener('mousemove', (e) => {
        const bg = document.querySelector('.bg-gradient');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        bg.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
});
