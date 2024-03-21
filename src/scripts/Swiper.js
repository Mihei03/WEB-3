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
    const imageElement = document.createElement('img');
    document.body.appendChild(imageElement);
});

// старый код свайпера
document.addEventListener('DOMContentLoaded', function() {
    // Динамическая загрузка библиотеки Swiper
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
    script.onload = function() {
        // Инициализация первого слайдера Swiper
        var swiper1 = new Swiper('#swiper1', {
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });

        // Инициализация второго слайдера Swiper
        var swiper2 = new Swiper('#swiper2', {
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });
    };
    document.head.appendChild(script);
  });
