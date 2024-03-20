import './Swiper.js';
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('findButton');
    button.addEventListener('click', function() {
        requestVacancies();
    });
});


export function requestVacancies(){
    let searchText = document.getElementById("search-input").value;
    axios.get(`https://api.hh.ru/vacancies?text=${searchText}`)
    .then((response) => {
        const data = response.data;
        displayCards(data);
    })
    .catch((error) => {
        console.error('Ошибка при загрузке данных о вакансии:', error);
    })
}

export function createCard(cardData) {
    var card = document.createElement("div");
    card.classList.add("card");
    let salaryMessage;
    if(cardData.salary.from == null){
        salaryMessage = "Требуется уточнение"
    }
    else {
        salaryMessage = cardData.salary.from
    }
    
    card.innerHTML = `
        <h2>${cardData.name}</h2>
        <p>Зарплата от ${salaryMessage}</p>
        <p>Подробнее: ${cardData.alternate_url}</p>
    `;

    return card;
}

export function displayCards(data){
    let items = data.items;

    var swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = "";
    
    items.forEach(function(item) {
        var card = createCard(item);
        var slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.appendChild(card);
        swiperWrapper.appendChild(slide);
    });

    // Инициализация слайдера Swiper
    document.addEventListener('DOMContentLoaded', function() {
        var swiperVacancies = new Swiper('.swiper-container-vacancies', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next1',
                prevEl: '.swiper-button-prev1'
            }
        });
    });
}
