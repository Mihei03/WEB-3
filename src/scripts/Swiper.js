import example from '../Resources/genshin.png'
import example1 from '../styles/style.css'
document.addEventListener('DOMContentLoaded', function() {
    // Динамическая загрузка библиотеки Swiper
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
    script.onload = function() {
    // Инициализация слайдера Swiper
        var swiper = new Swiper('.swiper-container', {
            // Опции слайдера
            loop: true, // Бесконечный цикл
            navigation: {
                nextEl: '.swiper-button-next', // Кнопка "Next"
                prevEl: '.swiper-button-prev', // Кнопка "Prev"
            },
        });
    }
    document.head.appendChild(script);
});