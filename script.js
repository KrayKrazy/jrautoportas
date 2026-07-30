/* =========================================
   JR Auto Portas - JavaScript
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Subtle Parallax on Hero Image
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY < window.innerHeight) {
            const scrollPos = window.scrollY;
            hero.style.backgroundPosition = `center ${scrollPos * 0.4}px`;
        }
    });
});
