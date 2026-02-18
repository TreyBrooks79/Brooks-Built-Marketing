// Mobile menu
const toggle = document.getElementById('mobileToggle');
const menu = document.getElementById('mobileMenu');

if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => menu.classList.remove('open'))
    );
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scroll animations (fade-up)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Hide nav on scroll down, show on scroll up
let lastScrollY = 0;
let ticking = false;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                nav.classList.add('nav-hidden');
            } else {
                nav.classList.remove('nav-hidden');
            }
            nav.style.borderBottomColor = currentScrollY > 20
                ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.04)';
            lastScrollY = currentScrollY;
            ticking = false;
        });
        ticking = true;
    }
});

// Magnetic button effect on CTA
document.querySelectorAll('.btn-glow').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translateY(-3px) translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});