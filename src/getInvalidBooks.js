// @ts-check

import * as yup from 'yup';

const genres = [
  'drama', 'horror', 'fantasy', 'classic',
];

// VERSION #1

const getInvalidBooks = (books) => {
  const validBookScheme = yup.object().shape({
    name: yup.string().required(),
    author: yup.string().required(),
    pagesCount: yup.number().positive().integer().notRequired(),
    link: yup.string().url().notRequired(),
    genre: yup.string().oneOf(genres),
  });
  const invalidBooks = books.reduce((acc, book) => {
    if (!validBookScheme.isValidSync(book)) {
      acc.push(book);
    }
    return acc;
  }, []);
  return invalidBooks;
};

// VERSION #2

const getInvalidBooks1 = (books) => {
  const validBookScheme = yup.object().shape({
    name: yup.string().required(),
    author: yup.string().required(),
    pagesCount: yup.number().positive().integer().notRequired(),
    link: yup.string().url().notRequired(),
    genre: yup.string().oneOf(genres),
  });
  const invalidBooks = books.filter((book) => !validBookScheme.isValidSync(book));
  return invalidBooks;
};

export { getInvalidBooks, getInvalidBooks1 };

// BEGIN (write your solution here)

// END

/* Сотрудники библиотеки решили провести ревизию базы данных своих книг,
все ли заполнено правильно. Для этого им понадобится программа, которая находит список книг
с неправильно заполненными данными.

index.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список книг,
находит среди них невалидные и возвращает их наружу.

import getInvalidBooks from './index.js';

const books = [
  { name: 'book', author: 'author' },
  { author: 'author 2' },
];
const invalidBooks = getInvalidBooks(books); // { author: 'author 2' }
Описания формата каждой книги:

name – строка, обязательное
author – строка, обязательное
pagesCount – число, необязательное
link – строка url, необязательное, не может быть пустой строкой; ссылка на книгу в интернете
genre – строка, необязательное; жанр книги. Должен входить в список определенный в файле index.js
Подсказки
oneOf – проверка вхождения в список
isValidSync – проверка валидности */
