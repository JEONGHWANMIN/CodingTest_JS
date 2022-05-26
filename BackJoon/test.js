Array.prototype.last = function () {
  return this.slice(-1)[0];
};

Array.prototype.maxLength = function () {
  let max = this[0].length;
  for (let i = 1; i < this.length; i++) {
    if (this[i].length > max) max = this[i];
  }
  return max.length;
};

class Human {}
class SuperArray extends Array {
  minLength() {
    let min = this[0].length;
    for (let i = 1; i < this.length; i++) {
      if (this[i].length < min) {
        min = this[i];
      }
    }
    return min;
  }
}

let a = ['21', '1234', 'Hello World222', 'Hello World!'];
let b = new SuperArray('hi', 'Hello', 'Ni hao');
console.log(a.last());
console.log(a.constructor);
console.log(b.minLength());
console.log(b.__proto__ === Array.prototype);
console.log(b.__proto__ === SuperArray.prototype);
console.log(b.__proto__.__proto__ === Array.prototype);
console.log(b.constructor);
console.log(Array.__proto__);
console.log(Array.__proto__.__proto__);
console.log(Array.__proto__.__proto__ === Object.prototype);

class Person {
  constructor() {
    this.name = 'Han';
    this.age = 12;
  }
}

class Person2 extends Person {}
console.log(Person);
const human = new Person2();

console.log(human.__proto__.constructor);
console.log(human.constructor);
