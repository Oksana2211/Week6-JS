

const popularProducers = [
  {
    name: 'Стивен Спилберг',
    career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
    films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
    top_rated_film: 'Список Шиндлера'
  },
  {
    name: 'Кристофер Нолан',
    career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
    films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
    top_rated_film: 'Начало'
  },
  {
    name: 'Мартин МакДона',
    career: 'Сценарист, Режиссёр, Продюсер',
    films: 'https://www.film.ru/person/martin-makdonah',
    top_rated_film: 'Три билборда на границе Эббинга, Миссури'
  },
  {
    name: 'Алексей Балабанов',
    career: 'Режиссёр, Сценарист, Актёр, Продюсер',
    films: 'https://www.film.ru/person/aleksey-balabanov',
    top_rated_film: 'Брат'
  },
  {
    name: 'Питер Фаррелли',
    career: 'Продюсер, Режиссёр, Сценарист, Актёр',
    films: 'https://www.film.ru/person/piter-farrelli',
    top_rated_film: 'Зелёная книга'
  },
  {
    name: 'Юрий Быков',
    career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
    films: 'https://www.film.ru/person/yuriy-bykov',
    top_rated_film: 'Дурак'
  },
  {
    name: 'Жан-Марк Валле',
    career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
    films: 'https://www.film.ru/person/zhan-mark-valle',
    top_rated_film: 'Далласский клуб покупателей'
  },
];


//получаем основной контейнер(section), записываем в переменную
const cardList = document.querySelector('.cards'); 

//получаем каждый элемент из массива и записываем в соответствующий контейнер с помощью функции
popularProducers.forEach((item) => {

//создаем контейнер для информации о режиссерaх
const blockProducers = document.createElement('div');
blockProducers.className = "card-list";

//создаем контейнер для имени режиссера
const nameProducers = document.createElement('span');
nameProducers.className = "card-list__name";
nameProducers.textContent = item.name;//берем имя из массива

//создаем контейнер для информации о карьере режиссера
const careerProducers = document.createElement('span');
careerProducers.className = "card-list__career";
careerProducers.textContent = item.career;//берем информацию из массива

//добавляем гиперссылку на фильмографию
const filmsProducers = document.createElement('a');
filmsProducers.className = "card-list__films";
filmsProducers.textContent = "Фильмография";
filmsProducers.href = item.films;//берем ссылку из массива


//добавляем элементы в родительский блок
blockProducers.appendChild(nameProducers);
blockProducers.appendChild(careerProducers);
blockProducers.appendChild(filmsProducers);
//добавляем блок с информацией в основной контейнер(section)
cardList.appendChild(blockProducers);
})


//создаем новый массив для лучших фильмов каждого режиссера
const topFilmsList = popularProducers.map((item) => item.top_rated_film);

//записываем заголовок
const titleFilmsList = document.createElement('h3');
titleFilmsList.textContent = "Лучшие фильмы этих режиссеров";
titleFilmsList.className = "title-h3";
cardList.appendChild(titleFilmsList);//добавляем заголовок в основной контейнер(section)

// создаем контейнер и записываем в него лучшие фильмы  
const topFilmsListItem = document.createElement('span');
topFilmsListItem.innerHTML = topFilmsList;
cardList.appendChild(topFilmsListItem);//добавляем контейнер с фильмами в основной контейнер(section)





