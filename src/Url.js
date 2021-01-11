// BEGIN (write your solution here)

// Solution using builtin URL Class;

export default class Url {
  constructor(url) {
    this.url = new URL(url);
  }

  getScheme() {
    return this.url.protocol.slice(0, -1);
  }

  getHostName() {
    return this.url.hostname;
  }

  getQueryParams() {
    return Object.fromEntries(this.url.searchParams);
  }

  getQueryParam(key, defaultValue = null) {
    return this.url.searchParams.has(key) ? this.url.searchParams.get(key) : defaultValue;
  }

  toString() {
    return this.url.toString();
  }

  equals(url) {
    return this.url.toString() === url.toString();
  }
}

// CUSTOM SOLUTION, without using builtin URL Class;

/* export default class Url {
  constructor(url) {
    this.url = url;
  }

  getUrl() {
    return this.url;
  }

  getScheme() {
    if (this.url.startsWith('https')) {
      return this.getUrl().slice(0, 5);
    }
    if (this.url.startsWith('http')) {
      return this.getUrl().slice(0, 4);
    }
    return null;
  }

  getHostName() {
    const splitedUrl = this.getUrl().split(':').join('?').split('?');
    return splitedUrl[1].slice(2);
  }

  getQueryParams() {
    const splitedUrlByQueryParams = this.getUrl().split('?');
    const splitedSearchParams = splitedUrlByQueryParams[1].split('&');
    const splitedKeyValue = splitedSearchParams.map((item) => item.split('='));
    return splitedKeyValue.reduce((acc, item) => {
      const [key, value] = item;
      return { ...acc, [key]: value };
    }, {});
  }

  getQueryParam(key, defaultValue = null) {
    const keyValuePairs = this.getQueryParams();
    // eslint-disable-next-line no-restricted-syntax
    if (Object.prototype.hasOwnProperty.call(keyValuePairs, key)) {
      return keyValuePairs[key];
    }
    return defaultValue;
  }

  equals(url) {
    return this.getUrl() === url.getUrl();
  }
} */
// END

/* Url.js
В данном упражнении вам предстоит реализовать класс Url, который позволяет извлекать
из HTTP адреса, представленного строкой, его части. Экспортируйте класс по умолчанию.

Класс должен содержать конструктор и методы:

конструктор - принимает на вход HTTP адрес в виде строки.
getScheme() - возвращает протокол передачи данных (без двоеточия).
getHostName() - возвращает имя хоста.
getQueryParams() - возвращает параметры запроса в виде пар ключ-значение объекта.
getQueryParam() - получает значение параметра запроса по имени. Если параметр с переданнымименем не
существует, метод возвращает значение заданное вторым параметром (по умолчанию равно null).
equals(url) - принимает объект класса Url и возвращает результат
сравнения с текущим объектом- true или false.
В процессе прохождения испытания вам нужно будет хорошо поработать с документацией
и изучить возможности класса URL, для того чтобы распарсить строковое представление HTTP адреса.

Примеры
const url = new Url('http://yandex.ru:80?key=value&key2=value2');
url.getScheme(); // 'http'
url.getHostName(); // 'yandex.ru'
url.getQueryParams();
// {
//   key: 'value',
//   key2: 'value2',
// };
url.getQueryParam('key'); // 'value'
// второй параметр - значение по умолчанию
url.getQueryParam('key2', 'lala'); // 'value2'
url.getQueryParam('new', 'ehu'); // 'ehu'
url.getQueryParam('new'); // null
url.equals(new Url('http://yandex.ru:80?key=value&key2=value2')); // true
url.equals(new Url('http://yandex.ru:80?key=value')); // false */
