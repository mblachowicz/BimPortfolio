function showEmail() {
    document.getElementById('email').style.display = 'block';
}

document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });
});

function showEmail() {
    document.getElementById('email').style.display = 'block';
}