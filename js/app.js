window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`);
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Инициализация ScrollSmoother
const smoother = ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5, // Уровень плавности скролла
    effects: true, // Включаем эффекты
    normalizeScroll: true, // Нормализация скролла
    ignoreMobileResize: true, // Игнорировать изменение размера на мобильных устройствах
});

// Разрешаем pointer-events для иконок
smoother.effects('.hero_link', { speed: 1, lag: 0.1 });
