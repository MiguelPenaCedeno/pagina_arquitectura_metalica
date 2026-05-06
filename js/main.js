/* ============================================
   ARQUITECTURA METALICA
   Main JavaScript — GSAP + Vanta + Lenis
   ============================================ */

// ---- Lenis Smooth Scroll ----
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

// ---- GSAP + ScrollTrigger Setup ----
gsap.registerPlugin(ScrollTrigger);

// Connect Lenis to GSAP
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

let vantaEffect = null;

document.addEventListener('DOMContentLoaded', () => {

    // ---- Preloader ----
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 800);
    });

    // Fallback: hide preloader after 3s max
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 3000);

    // ---- Vanta NET — Animated Hero Background ----
    if (typeof VANTA !== 'undefined') {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        vantaEffect = VANTA.NET({
            el: '.hero',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            color: 0x1a1208,            // dark ink — net + particles
            backgroundColor: 0xece6dc,  // cream — matches page substrate
            points: isMobile ? 6.0 : 10.0,
            maxDistance: isMobile ? 26.0 : 22.0,
            spacing: isMobile ? 34.0 : 18.0,
            showDots: true
        });
    }

    // ---- GSAP Hero Animations ----
    gsap.from('.hero-badge', {
        opacity: 0, y: -30, duration: 0.8, delay: 0.3, ease: 'power3.out'
    });
    gsap.from('.hero h1', {
        opacity: 0, y: 50, duration: 1, delay: 0.5, ease: 'power3.out'
    });
    gsap.from('.hero-subtitle', {
        opacity: 0, y: 30, duration: 0.9, delay: 0.75, ease: 'power3.out'
    });
    gsap.from('.hero-buttons', {
        opacity: 0, y: 30, duration: 0.9, delay: 0.95, ease: 'power3.out'
    });
    gsap.from('.stat-item', {
        opacity: 0, y: 40, duration: 0.7, delay: 1.1,
        stagger: 0.15, ease: 'power3.out'
    });

    // ---- Hero Parallax on Scroll ----
    gsap.to('.hero-content', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 120,
        opacity: 0.3,
        ease: 'none'
    });

    // ---- Section Headers ----
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: { trigger: header, start: 'top 85%' },
            opacity: 0, y: 50, duration: 0.9, ease: 'power3.out'
        });
    });

    // ---- About Section ----
    gsap.from('.about-image', {
        scrollTrigger: { trigger: '.about-image', start: 'top 80%' },
        opacity: 0, x: -60, duration: 1, ease: 'power3.out'
    });
    gsap.from('.about-content', {
        scrollTrigger: { trigger: '.about-content', start: 'top 80%' },
        opacity: 0, x: 60, duration: 1, ease: 'power3.out'
    });
    gsap.utils.toArray('.about-feature').forEach((el, i) => {
        gsap.from(el, {
            scrollTrigger: { trigger: el, start: 'top 85%' },
            opacity: 0, y: 30, duration: 0.6,
            delay: i * 0.1, ease: 'power2.out'
        });
    });

    // ---- Mission / Vision / Values Cards ----
    gsap.utils.toArray('.mv-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: { trigger: card, start: 'top 85%' },
            opacity: 0, y: 50, duration: 0.7,
            delay: i * 0.12, ease: 'power3.out'
        });
    });

    // ---- Service Cards ----
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: { trigger: card, start: 'top 88%' },
            opacity: 0, y: 60, scale: 0.97, duration: 0.7,
            delay: i * 0.08, ease: 'power3.out'
        });
    });

    // ---- Project Cards ----
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: { trigger: card, start: 'top 88%' },
            opacity: 0, y: 50, duration: 0.65,
            delay: i * 0.1, ease: 'power2.out'
        });
    });

    // ---- Process Steps ----
    gsap.utils.toArray('.process-step').forEach((step, i) => {
        const direction = i % 2 === 0 ? -70 : 70;
        gsap.from(step, {
            scrollTrigger: { trigger: step, start: 'top 85%' },
            opacity: 0, x: direction, duration: 0.9, ease: 'power3.out'
        });
    });

    // ---- CTA Banner ----
    gsap.from('.cta-content', {
        scrollTrigger: { trigger: '.cta-banner', start: 'top 75%' },
        opacity: 0, scale: 0.95, duration: 1, ease: 'power3.out'
    });

    // ---- Testimonials ----
    gsap.from('.testimonial-swiper', {
        scrollTrigger: { trigger: '.testimonial-swiper', start: 'top 80%' },
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out'
    });

    // ---- Contact Section ----
    gsap.from('.contact-info', {
        scrollTrigger: { trigger: '.contact-info', start: 'top 80%' },
        opacity: 0, x: -50, duration: 1, ease: 'power3.out'
    });
    gsap.from('.contact-form', {
        scrollTrigger: { trigger: '.contact-form', start: 'top 80%' },
        opacity: 0, x: 50, duration: 1, ease: 'power3.out'
    });

    // ---- Contact Map ----
    gsap.from('.contact-map', {
        scrollTrigger: { trigger: '.contact-map', start: 'top 85%' },
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out'
    });

    // ---- Footer ----
    gsap.utils.toArray('.footer-col').forEach((col, i) => {
        gsap.from(col, {
            scrollTrigger: { trigger: col, start: 'top 90%' },
            opacity: 0, y: 30, duration: 0.6,
            delay: i * 0.1, ease: 'power2.out'
        });
    });

    // ---- Navbar Scroll ----
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    function onScroll() {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        updateActiveNavLink();
    }

    window.addEventListener('scroll', onScroll);
    onScroll();

    // ---- Active Nav Link ----
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        const scrollY = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ---- Mobile Menu ----
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // ---- Back to Top (use Lenis for smooth scroll) ----
    backToTop.addEventListener('click', () => {
        lenis.scrollTo(0);
    });

    // ---- Smooth Scroll for anchor links (use Lenis) ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                lenis.scrollTo(target);
            }
        });
    });

    // ---- Counter Animation ----
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-target]');
        counters.forEach(counter => {
            if (counter.dataset.animated) return;

            const target = parseInt(counter.dataset.target);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                    counter.dataset.animated = 'true';
                }
            };

            updateCounter();
        });
    }

    // Observe hero stats for counter animation
    const statsSection = document.querySelector('.hero-stats-bar');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    // ---- Project Filters ----
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                    gsap.from(card, { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' });
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ---- Swiper Testimonials ----
    new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 32,
            },
        },
    });

    // ---- Contact Form ----
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Mensaje Enviado';
                submitBtn.style.background = '#10b981';

                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    contactForm.reset();
                }, 3000);
            }, 1500);
        });
    }

    // ---- Hero Particles ----
    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;

        const particleCount = 30;
        const rootStyles = getComputedStyle(document.documentElement);
        const orangeRgb = rootStyles.getPropertyValue('--color-orange-rgb').trim() || '181, 107, 67';
        const tealRgb = '151, 214, 223';

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: ${Math.random() > 0.5 ? `rgba(${orangeRgb}, ${Math.random() * 0.2 + 0.05})` : `rgba(${tealRgb}, ${Math.random() * 0.2 + 0.05})`};
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            container.appendChild(particle);
        }
    }

    // Add particle animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% { transform: translate(0, 0) scale(1); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translate(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 200 + 100}px, -${Math.random() * 400 + 200}px) scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    createParticles();

    // ---- Tilt Effect on Service Cards (desktop only) ----
    if (window.matchMedia('(min-width: 1024px)').matches) {
        const cards = document.querySelectorAll('.service-card, .mv-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // ---- Privacy Modal ----
    const privacyModal = document.getElementById('privacyModal');
    const openPrivacy = document.getElementById('openPrivacy');
    const openTerms = document.getElementById('openTerms');
    const closePrivacy = document.getElementById('closePrivacy');
    const cookiePrivacyLink = document.getElementById('cookiePrivacyLink');

    function showModal() {
        privacyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function hideModal() {
        privacyModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (openPrivacy) openPrivacy.addEventListener('click', (e) => { e.preventDefault(); showModal(); });
    if (openTerms) openTerms.addEventListener('click', (e) => { e.preventDefault(); showModal(); });
    if (cookiePrivacyLink) cookiePrivacyLink.addEventListener('click', (e) => { e.preventDefault(); showModal(); });
    if (closePrivacy) closePrivacy.addEventListener('click', hideModal);
    if (privacyModal) privacyModal.addEventListener('click', (e) => { if (e.target === privacyModal) hideModal(); });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && privacyModal.classList.contains('active')) hideModal();
    });

    // ---- Cookie Banner ----
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookies = document.getElementById('acceptCookies');

    if (cookieBanner && !localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => cookieBanner.classList.add('visible'), 1500);
    }

    if (acceptCookies) {
        acceptCookies.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.remove('visible');
        });
    }

});

window.addEventListener('beforeunload', () => {
    if (vantaEffect) vantaEffect.destroy();
});
