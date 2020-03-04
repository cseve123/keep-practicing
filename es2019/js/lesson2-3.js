// 类 可控属性、静态方法、继承和语法糖
// es5
// let Animal = function (type) {
//   this.type = type;
// }
// Animal.prototype.eat = function () {
//   // 基于原型链的继承原则
//   Animal.walk(); // 静态方法，在实例里是找不到的
//   console.log('I am eat food');
// }

// Animal.walk = function () {
//   console.log('I am walking');
// }

// let dog = new Animal('dog');
// let monkey = new Animal('monkey');
// console.log(dog);
// console.log(dog.walk);
// console.log(monkey);

// monkey.constructor.prototype.eat = function () {
//   // 变动了继承
//   console.log('error');
// }
// dog.eat();
// monkey.eat();
// 继承
// let Dog = function () {
//   Animal.call(this, 'dog');
//   this.run = function () {
//     console.log('I am run');
//   }
// }
// Dog.prototype = Animal.prototype;


// es6
let _age = 4; // 无法放到class里，私有属性需要一个闭包
class Animal {
  constructor (type) {
    this.type = type
  }
  // 属性只读和条件的写入
  get age () {
    return _age
  }
  set age (val) {
    if (val < 7 && val > 4) {
      _age = val;
    }
  }
  eat () {
    console.log('I am eat food')
  }
  // 静态方法，在实例里是找不到的
  static walk () {
    console.log('I am static');
  }
}
let dog = new Animal('dog');
let monkey = new Animal('monkey');
dog.age = 8;
console.log(dog.age);
console.log('static', dog.walk);
console.log(dog._age);
console.log(monkey);
// 继承
class Cat extends Animal {
  constructor(type) {
    super(type); // 比方放在第一行
    this.age = 2;
  }
}
let cat = new Cat('cat');
console.log(cat);