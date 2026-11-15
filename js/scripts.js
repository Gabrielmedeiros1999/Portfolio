const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const track = document.getElementById('projects-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function cardStep() {
    const card = track.querySelector('.project-card');
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return card.offsetWidth + gap;
}

function updateButtons() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    prevBtn.disabled = track.scrollLeft <= 5;
    nextBtn.disabled = track.scrollLeft >= maxScroll - 5;
}

prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -cardStep(), behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: cardStep(), behavior: 'smooth' });
});

track.addEventListener('scroll', updateButtons);
window.addEventListener('resize', updateButtons);
updateButtons();

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

