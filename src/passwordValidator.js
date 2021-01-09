// @ts-check

const hasNumber = (string) => (string.search(/\d/) !== -1);

// BEGIN (write your solution here)

// VERSION #1

/* export default class PasswordValidator {
  constructor({ minLength = 8, containNumbers = true } = { minLength: 8, containNumbers: true }) {
    this.minLength = minLength;
    this.containNumbers = containNumbers ?? false;
  }

  validate(pwd) {
    if (pwd.length >= this.minLength) {
      if (hasNumber(pwd) === this.containNumbers) {
        return {};
      }
    }
    if (pwd.length >= this.minLength) {
      if (hasNumber(pwd) !== this.containNumbers) {
        return { containNumbers: 'should contain at least one number' };
      }
    }
    if (pwd.length < this.minLength) {
      if (hasNumber(pwd) === this.containNumbers) {
        return { minLength: 'too small' };
      }
    }
    return { containNumbers: 'should contain at least one number', minLength: 'too small' };
  }
} */

// VERSION #2

export default class PasswordValidator {
  constructor(options = {}) {
    const defaultOptions = {
      minLength: 8,
      containNumbers: true,
    };
    this.options = { ...defaultOptions, ...options };
  }

  validate(pwd) {
    const errors = {};

    if (pwd.length < this.options.minLength) {
      errors.minLength = 'too small';
    }
    if (!hasNumber(pwd) === this.options.containNumbers) {
      errors.containNumbers = 'should contain at least one number';
    }
    return errors;
  }
}

// END

/* Валидация - процесс проверки корректности данных. В вебе происходит всегда при отправке форм,
например, регистрация на многих сайтах проверяет корректность введённого емейла,
его уникальность (что такого пользователя ещё нет).

Каждый тип валидации в таких системах обычно представлен классом-валидатором,
который принимает на вход опции и предоставляет интерфейс в виде функции validate().
Эта функция принимает на вход то, что проверяется (валидируется) и возвращает массив или объект с
ошибками. Если объект пустой, значит ошибок нет.

solution.js
Реализуйте и экспортируйте по умолчанию класс PasswordValidator, ориентируясь на тесты.

Этот валидатор поддерживает следующие опции:

minLength (по умолчанию 8) - минимальная длина пароля
containNumbers (по умолчанию true) - требование содержать хотя бы одну цифру
Опции передаются одним объектом в конструктор валидатора.

Объект ошибок в ключах содержит название опции, а в значениях текст, указывающий на ошибку
(тексты можно подсмотреть в тестах). */
