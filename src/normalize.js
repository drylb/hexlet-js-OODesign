// @ts-check
// BEGIN (write your solution here)

// VERSION #1

const normalize = (coll) => coll.reduce((acc, item) => {
  const { name, country } = item;
  const normalizedCountryName = country.toLowerCase().trim();
  const normalizedCityName = name.toLowerCase().trim();
  if (!Object.prototype.hasOwnProperty.call(acc, normalizedCountryName)) {
    acc[normalizedCountryName] = [];
  }
  if (!acc[normalizedCountryName].includes(normalizedCityName)) {
    acc[normalizedCountryName].push(normalizedCityName);
    acc[normalizedCountryName].sort();
  }
  return acc;
}, {});

// VERSION #2

const normalize1 = (coll) => coll
  // eslint-disable-next-line max-len
  .map(({ name, country }) => ({ city: name.toLowerCase().trim(), country: country.toLowerCase().trim() }))
  .map(({ city, country }) => [city, country])
  .sort()
  .reduce((acc, [city, country]) => {
    const citiesAcc = acc[country] ?? [];
    const cities = citiesAcc.concat(city);
    const uniqCities = new Set(cities);
    return { ...acc, [country]: [...uniqCities] };
  }, {});

export { normalize, normalize1 };
// END

/* Эту задачу можно решить огромным числом способов.
Почти наверняка ваш способ будет не такой,как решение учителя.

Мы не даём никаких подсказок насчет того, какие функции нужно использовать.
Как минимум вы знаете главную тройку map, filter и reduce.

solution.js
Реализуйте и экспортируйте по умолчанию функцию normalize() которая принимает
на вход список городов и стран, нормализует их имена, сортирует и группирует по стране.

import normalize from './solution.js';

const countries = [
  { name: 'Miami', country: 'usa' },
  { name: 'samarA', country: '  ruSsiA' },
  { name: 'Moscow ', country: ' Russia' },
];

normalize(countries);
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// } */
