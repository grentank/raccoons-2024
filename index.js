// const obj = {
//   hello: 'world',
//   name: 'Bob',
// };

// const arr = ['Value', 'Хорошая погода'];

// arr.hello = 'Array hello'
// obj[1] = 'Вчера погода была не оч'
// arr[1] = '123'

// console.log(arr)

const cities = [
  'Москва',
  'Санкт-Петербург',
  'Казань',
  'Новосибирск',
  'Воронеж',
  'Тюмень',
  'Саратов',
  'Екатеринбург',
  'Челябинск',
  'Красноярск',
  'Ижевск',
  'Уфа',
  'Омск',
  'Ростов-на-Дону',
  'Пермь',
];

// const res = cities.pop();
// console.log({ res, cities });

// const pushes = [];
// const unshifts = [];
// const amount = 1e5;
// console.time('push');
// for (let index = 0; index < amount; index++) {
//   pushes.push(index);
// }
// console.timeEnd('push');
// console.time('unshift');
// for (let index = 0; index < amount; index++) {
//   unshifts.unshift(index);
// }
// console.timeEnd('unshift');

// console.log(cities.split(' '))
// slice -- не мутирует массив cities
// const res = cities.slice(3, 5); // 3, 4
// console.log({ res, cities });

// splice -- мутирует массив cities
// const res = cities.splice(3, 5); // 3, 4, 5, 6, 7
// console.log({ res, cities });

// Добавление без мутации
// const res = cities.concat(['Сочи', 'Белгород', 'Курск', 'Калуга']);
// console.log({ res, cities });

// const res = cities.reverse();
// res.splice(1, 10);
// console.log({ cities });
// console.log(res === cities);

// const res = cities.toReversed();
// res.splice(1, 10);
// console.log({ cities });
// console.log(res === cities);

// const res = cities.reverse();
// res.toSpliced(1, 10);
// console.log({ cities });
// console.log(res === cities);

// function cityHasTargetVowels(city) {
//   if (
//     city.toLowerCase().includes('а') ||
//     city.toLowerCase().includes('о')
//   )
//     return true;
//   return false;
// }

// const res = cities.every(cityHasTargetVowels);
// const res = cities.some(cityHasTargetVowels);
// const res = cities
//   .filter(cityHasTargetVowels)
//   .every(cityHasTargetVowels);
// console.log(res);
// const res = cities.filter(
//   (city) =>
//     city.toLowerCase().includes('а') ||
//     city.toLowerCase().includes('о'),
// );
// const res = cities.filter((city) => city.length <= 5);
// console.log({ res });
// const res = cities.map(
//   (city) => `${city.slice(0, -1)}${city.slice(-1).toUpperCase()}`,
// );
// const res = cities
//   .map((city, index, array) => ({
//     city,
//     population:
//       Math.floor(Math.random() * 2e6) + (array.length - index) * 1e6,
//     country: 'Россия',
//   }))
//   .toSorted((city1, city2) => (city2.city < city1.city ? 1 : -1));

// console.log({ res });

// filter -- если убрать элементы
// map -- если преобразовать элементы
// reduce -- если нужно из множества получить что-то одно (не поиск)

// { 4: [Омск, Тула],  }
// const res = cities.reduce((acc, city) => {
//   const length = city.length.toString();
//   if (length in acc) acc[length].push(city);
//   else acc[length] = [city];
//   return acc;
// }, {});

// console.log({ res });

// const res = cities.forEach((city) => {
//   if (city.length >= 4) return;
//   console.log(city);
// });

const countries = [
  { name: 'Россия', population: 144500000, capital: 'Москва' },
  { name: 'США', population: 331000000, capital: 'Вашингтон' },
  { name: 'Канада', population: 38000000, capital: 'Оттава' },
  { name: 'Франция', population: 67000000, capital: 'Париж' },
  { name: 'Германия', population: 83000000, capital: 'Берлин' },
  { name: 'Италия', population: 60000000, capital: 'Рим' },
  { name: 'Япония', population: 126000000, capital: 'Токио' },
  { name: 'Китай', population: 1386000000, capital: 'Пекин' },
  { name: 'Индия', population: 1380000000, capital: 'Нью-Дели' },
  { name: 'Бразилия', population: 212000000, capital: 'Бразилиа' },
  { name: 'Австралия', population: 25000000, capital: 'Канберра' },
  {
    name: 'Аргентина',
    population: 45000000,
    capital: 'Буэнос Айрес',
  },
  { name: 'Чили', population: 19000000, capital: 'Сантьяго' },
  { name: 'Египет', population: 100000000, capital: 'Каир' },
  { name: 'Англия', population: 56000000, capital: 'Лондон' },
  { name: 'Испания', population: 47000000, capital: 'Мадрид' },
  { name: 'Мексика', population: 128900000, capital: 'Мехико' },
  { name: 'Ирак', population: 40000000, capital: 'Багдад' },
  {
    name: 'Саудовская Аравия',
    population: 33000000,
    capital: 'Эрра�у',
  },
  { name: 'Турция', population: 83000000, capital: 'Анкара' },
];

// SHALLOW COPY
// const copy = [...countries];
// const copy = countries.slice();
// const copy = countries.map((e) => e);
// const res = copy.sort((c1, c2) => (c1.name > c2.name ? 1 : -1));
// res[2] = 'ТУТ НЕТ СТРАНЫ';
// console.log({ countries });

// DEEP COPY
// const copy = JSON.parse(JSON.stringify(cities));
const copy = structuredClone(cities);
const res =  copy.sort((c1, c2) => (c1.name > c2.name ? 1 : -1));
res[2].capital = 'НЕВЕРНАЯ СТОЛИЦА';
res[2].name = '#############';
console.log({ countries });
