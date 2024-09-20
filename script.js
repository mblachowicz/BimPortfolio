// Detect when sections come into view
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });
});

function showEmail() {
    document.getElementById('email').style.display = 'block';
}
