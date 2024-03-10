// Функция для создания виджета отображения информации о вакансии
function createVacancyWidget(vacancyData) {
    const vacancyWidgetElement = document.getElementById('vacancy-widget');
    const vacancyElement = document.createElement('div');
    vacancyElement.classList.add('vacancy-card');

    const importantData = {
        name: vacancyData.name,
        salary: `${vacancyData.salary.from} ${vacancyData.salary.currency}`,
        experience: vacancyData.experience.name,
        employment: vacancyData.employment.name,
        alternate_url: vacancyData.alternate_url,
    };

    vacancyElement.innerHTML = `
        <h2>${importantData.name}</h2>
        <p>Зарплата: ${importantData.salary}</p>
        <p>Требуемый опыт работы: ${importantData.experience}</p>
        <p>Тип занятости: ${importantData.employment}</p>
        <a href="${importantData.alternate_url}" target="_blank">Подробнее</a>
    `;

    vacancyWidgetElement.appendChild(vacancyElement);
}

// Запрос данных о вакансии с помощью API hh.ru
axios.get('https://api.hh.ru/vacancies/7760476')
    .then((response) => {
        const vacancyData = response.data;
        createVacancyWidget(vacancyData);
    })
    .catch((error) => {
        console.error('Ошибка при загрузке данных о вакансии:', error);
    });