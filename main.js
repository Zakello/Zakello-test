// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to feature list items
const features = document.querySelectorAll('.feature-list li');
features.forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateX(-20px)';
    feature.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        feature.style.opacity = '1';
        feature.style.transform = 'translateX(0)';
    }, index * 100);
});