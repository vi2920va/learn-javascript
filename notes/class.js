'use strict';
// 객체 지향 프로그래밍(Object oriented programming)
// class : template
// object : instance of a class
// ES6+
// class는 객체(instance)를 생성하기 위한 템플릿(template)이다.
// 프로토타입을 베이스로 한 기본에 클래스 문법을 추가한 것.

// 1. 클래스 선언(Class declarations)
// class 키워드를 사용해서 정의하는데, 첫 글자는 관례적으로 대문자로 해서 작성한다.
// class는 선언 이전에 참조할 수 없다. 하지만 호이스팅이 발생하지 않는 것이 아니고  발생하지 않는 것처럼 동작한다.
// class body는 중괄호({})로 묶여 있는 안쪽 부분으로 이곳에 생성자, 데이터, 메서드를 정의한다.
// 이때 생성자는 클래스 안에 한 개만 존재할 수 있다. 만약 여러 개가 존재한다면 SyntaxError를 발생한다.
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
// 1) getter
// getter는 클래스 필드에 접근 할 때 마다 클래스 필드의 값을 조작하는 행위가 필요할 때 사용한다.
// 메서드의 이름 앞에 get 키워드를 사용해 정의한다. 이 때 메서드 이름은 클래스 필드 이름처럼 사용된다.
// getter는 호출하는 것이 아니라 프로퍼티를 참조하는 형식으로 사용하며 참조 시에 메서드가 호출된다.
// getter는 이름 그대로 무언가를 취득할 때 사용하므로 반드시 무언가를 반환해야 한다.

// 2) setter
// setter는 클래스 필드에 값을 할당 할 때 마다 클래스 필드의 값을 조작하는 행위가 필요할 때 사용한다.
// 메서드의 이름 앞에 set 키워드를 사용해 정의한다. 이 때 메서드 이름은 클래스 필드 이름처럼 사용된다.
// setter는 호출하는 것이 아니라 프로퍼티처럼 값을 할당하는 형식으로 사용하며 할당시에 메서드가 호출된다.
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

// 4.정적 속성과 메서드(Static properties and methods)
// static 키워드는 클래스를 위한 정적(static) 메서드를 정의한다.
// 정적 메서드는 클래스의 인스턴스와 관계없이 호출되며, 클래스 인스턴스에서는 호출할 수 없다.
// 즉, 정적 메서드는 클래스 이름을 호출하기 때문에 인스턴스를 생성하지 않아도 된다. 또한 this를 사용할 수 없다.

//* this
// 일반 메서드 내부에서는 this는 클래스의 인스턴스를 가리키고, 메서드 내부에서 this를 사용한다는 것은 클래스 인스턴스의 생성 전제로 하는 것.

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

// 5. 상속(Inheritance)
// 1) extends
// extends 키워드는 부모 클래스(base class)를 상속 받는 자식 클래스(sub class)를 정의할 때 사용한다.

// * 오버라이딩(Overriding)
// 상위 클래스가 가지고 있는 메서드를 하위 클래스가 재정의하여 사용하는 방식.

// 2) super
// super 키워드는 부모 클래스를 참조(reference)할 때 또는 부모 클래스의 constructor를 호출할 때 사용한다.
// super 메서드는 자식 클래스의 constructor 내부에서 부모 클래스의 constructor(super-constructor)를 호출한다.
// 즉, 부모 클래스의 인스턴스를 생성한다. 자식 클래스의 constructor에서 super()를 호출하지 않으면 this에 대한 참조 에러(referenceError)발생한다.
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
