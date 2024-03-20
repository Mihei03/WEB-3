//2 способ который меня чуть не убил
import styles from '../styles/style.css'
function importAllImages(r) {
    let images = {};
    r.keys().forEach((key) => {
      images[key] = r(key);
    });
    return images;
  }

const images = importAllImages(require.context('../Resources/', true, /\.(png|jpe?g|svg|ico)$/));

document.addEventListener('DOMContentLoaded', function() {
    const imageUrl = images['./myImage.png'].default; // замени 'myImage.png' на имя своего изображения
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    document.body.appendChild(imageElement);
});

// старый код свайпера
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

