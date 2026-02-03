// ========================================
// SMOOTH SCROLL & NAV
// ========================================

// Navbar scroll effect
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.8)';
        nav.style.boxShadow = 'none';
    }
});

// ========================================
// INTERSECTION OBSERVER (Fade in animations)
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe pricing cards
document.querySelectorAll('.pricing-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.15}s`;
    observer.observe(card);
});

// Observe FAQ items
document.querySelectorAll('.faq-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// ========================================
// STATS COUNTER ANIMATION
// ========================================

const animateValue = (element, start, end, duration, suffix = '') => {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 16);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            const value = entry.target.textContent;
            
            if (value.includes('+')) {
                const num = parseInt(value.replace('+', ''));
                animateValue(entry.target, 0, num, 1500, '+');
            } else if (value.includes('€')) {
                animateValue(entry.target, 0, 0, 1000, '€');
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value').forEach(stat => {
    statsObserver.observe(stat);
});

// ========================================
// GRADIENT ORBS PARALLAX
// ========================================

document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        
        orb.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// ========================================
// MOBILE MENU (si besoin futur)
// ========================================

// Pour l'instant nav simple, mais code prêt pour menu mobile

const createMobileMenu = () => {
    // Code pour menu burger si nécessaire
};

// ========================================
// PERFORMANCE & LAZY LOADING
// ========================================

// Lazy load images when implemented
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
}

// ========================================
// CONSOLE MESSAGE (fun touch)
// ========================================

console.log(
    '%c✨ StellaBrand',
    'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'
);

console.log(
    '%cCréez des logos magnifiques en quelques minutes 🎨',
    'font-size: 14px; color: #667eea;'
);

console.log(
    '%cInstaller maintenant → https://chrome.google.com/webstore',
    'font-size: 12px; color: #718096;'
);
