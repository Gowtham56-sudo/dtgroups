// Add animation to header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.transition = 'all 0.5s ease';
        header.style.transform = 'translateY(-10px)';
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.transform = 'translateY(0)';
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

// Animate elements when they appear in the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// Apply observer to sections
document.querySelectorAll('#home, #services, #contact').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 1s ease, transform 1s ease';
    observer.observe(section);
});
