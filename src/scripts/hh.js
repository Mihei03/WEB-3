// Функция для создания виджета отображения информации о вакансии
function createVacancyWidget(vacancyData) {
    const vacancyWidgetElement = document.getElementById('vacancy-widget');
    const vacancyElement = document.createElement('div');
    vacancyElement.classList.add('vacancy-card');
  
    vacancyElement.innerHTML = `
        <h2>${vacancyData.name}</h2>
        <p>Зарплата: ${vacancyData.salary.from} ${vacancyData.salary.currency}</p>
        <p>Требуемый опыт работы: ${vacancyData.experience.name}</p>
        <p>Тип занятости: ${vacancyData.employment.name}</p>
        <a href="${vacancyData.alternate_url}" target="_blank">Подробнее</a>
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
  