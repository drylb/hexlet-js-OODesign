// @ts-check
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */

// BEGIN (write your solution here)

const validateProperty = (target, prop) => {
  if (!(prop in target)) {
    throw new Error(`There is no such ${prop} in the target`);
  }
  if (prop.startsWith('_')) {
    throw new Error(`This ${prop} is protected`);
  }
};

const protect = (obj) => new Proxy(obj, {
  get: (target, prop) => {
    const property = target[prop];
    validateProperty(target, prop);
    return (typeof property === 'function') ? property.bind(obj) : property;
  },
  set: (target, prop, value) => {
    validateProperty(target, prop);
    target[prop] = value;

    return true;
  },
});

export default protect;

// END

/* JavaScript долгое время не поддерживал приватных свойств и методов.
Для них появилось соглашение об именовании с нижнего подчёркивания _,
чтобы предотвратить доступ ко внутренностям объекта в обход интерфейса.
Но сама возможность прямого доступа остаётся. Нам предстоит разработать
обёртку над объектом, защищающую его приватные свойства от прямого доступа.

protect.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает объект и
позволяет обращаться только к "публичным" свойствам и методам. При попытке
прочитать или перезаписать приватное или несуществующее свойство должно выбрасываться исключение.

import protect from '../protect.js';

class Course {
  constructor(prop) {
    this._name = prop;
  }

  getName() {
    return this._name;
  }
}

const course = new Course('Object-oriented design');
const protectedCourse = protect(course);

course.getName(); // "Object-oriented design"
protectedCourse.getName(); // "Object-oriented design"
course._name; // "Object-oriented design"
course._nonExists; // undefined

protectedCourse._name; // Error
protectedCourse._name = 'OOD'; // Error
protectedCourse._nonExists; // Error
В реализации используйте Proxy.

Подсказки
Чтобы в некоторых случаях избежать потери контекста используйте связывание.
Документация обработчика set */
