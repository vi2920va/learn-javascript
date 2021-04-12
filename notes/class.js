'use strict';
// 객체 지향 프로그래밍(Object oriented programming)
// class : template
// object : instance of a class
// JavaScript classes
// - ES6+
// - 프로토타입을 베이스로 한 기본에 클래스 문법을 추가한 것.

// 1. 클래스 선언(Class declarations)
class Person {
  // 생성자(constructor)
  constructor(name, age) {
    // 속성(fields)
    this.name = name;
    this.age = age;
  }

  // 기능(methods)
  speak() {
    console.log(`${this.name} : hello!`);
  }
}

const user = new Person('vi2920va', 30);
console.log(user.name); // vi2920va
console.log(user.age); // 30
user.speak(); // vi2920va : hello;

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields(public, private)
// Too soon!
class Experiment {
  publicFlield = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicFlield); //2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// static은 class가 가지고 있는 고유한 속성과 메서드 이다.
// Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('▲');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color!
console.log(rectangle.getArea()); // 400
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // drawing red color!
console.log(triangle.getArea()); // 200

// 6. class checking : instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString());
