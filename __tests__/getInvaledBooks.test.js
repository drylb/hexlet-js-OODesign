/* eslint-disable no-undef */
import { getInvalidBooks, getInvalidBooks1 } from '../src/getInvalidBooks';

const books1 = [
  {
    name: 'besi',
    author: 'dostoevski',
    pagesCount: 100,
    genre: 'drama',
    link: 'https://some.ru',
  },
  {
    name: 'book',
    author: 'author',
  },
  {
    name: 'book 2',
    author: 'author 2',
    genre: 'fiction',
    pagesCount: '50 страниц', // должно быть числом
  },
];

const books2 = [
  {
    name: 'besi',
    author: 'dostoevski',
    pagesCount: 100,
    genre: 'drama',
    link: 'верхняя правая полка', // должен быть url
  },
  {
    name: 'book 2',
    author: 'author 2',
  },
];

const books3 = [
  {
    name: 'besi',
    author: 'dostoevski',
    pagesCount: 100,
    genre: 'drama',
    link: 'https://some.ru',
  },
  {
    name: 'book',
    author: 'author',
    genre: 'fiction', // некорректный жанр
  },
  {
    name: 'book 2',
    author: 'author 2',
    genre: 'fantasy',
    pagesCount: 50,
  },
];

const cases = [
  ['пустая библиотека', [], []],
  ['pagesCount не число', books1, [books1[2]]],
  ['link не url', books2, [books2[0]]],
  ['жанр не из списка', books3, [books3[1]]],
  ['всё вместе',
    [].concat(books1, books2, books3),
    [].concat(books1[2], books2[0], [books3[1]]),
  ],
];

test.each(cases)('case %#: %s', (caseName, books, expected) => {
  expect(getInvalidBooks(books)).toEqual(expected);
});

const books4 = [
  {
    name: 'besi',
    author: 'dostoevski',
    pagesCount: 100,
    genre: 'drama',
    link: 'https://some.ru',
  },
  {
    name: 'book',
    author: 'author',
  },
  {
    name: 'book 2',
    author: 'author 2',
    genre: 'fiction',
    pagesCount: '50 страниц', // должно быть числом
  },
];

const books5 = [
  {
    name: 'besi',
    author: 'dostoevski',
    pagesCount: 100,
    genre: 'drama',
    link: 'верхняя правая полка', // должен быть url
  },
  {
    name: 'book 2',
    author: 'author 2',
  },
];

const books6 = [
  {
    name: 'besi',
    author: 'dostoevski',
    pagesCount: 100,
    genre: 'drama',
    link: 'https://some.ru',
  },
  {
    name: 'book',
    author: 'author',
    genre: 'fiction', // некорректный жанр
  },
  {
    name: 'book 2',
    author: 'author 2',
    genre: 'fantasy',
    pagesCount: 50,
  },
];

const cases1 = [
  ['пустая библиотека', [], []],
  ['pagesCount не число', books4, [books4[2]]],
  ['link не url', books5, [books5[0]]],
  ['жанр не из списка', books6, [books6[1]]],
  ['всё вместе',
    [].concat(books4, books5, books6),
    [].concat(books4[2], books5[0], [books6[1]]),
  ],
];

test.each(cases1)('case %#: %s', (caseName, books, expected) => {
  expect(getInvalidBooks1(books)).toEqual(expected);
});
