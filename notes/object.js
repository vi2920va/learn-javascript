// 객체(Objects)
// 객체는 JavaScript의 데이터 타입 중 하나이다.
// JavaScript의 원시 타입을 제외한 모든 타입은 객체이다.
// 객체는 key/value로 구성된 프로퍼티들의 순서가 없는 집합으로  각각의 속성들을 쉼표로 구분해 작성한다.
// 즉, 현실을 사물을 프로그래밍에 반영한다.
// object = {key : value}

// 1. 리터럴 및 속성(Literals and properties)
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax
function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const user = { name: 'vi2920va', age: 30 };
print(user);

// 프로퍼티 추가
user.hasJob = true;
console.log(user.hasJob); // true

// 프로퍼티 삭제
delete user.hasJob;
console.log(user.hasJob); //undefined;

// 2. 계산된 프로퍼티(Computed properties)
// 프로퍼티 접근할 때 점(.)기호를 경우 우측에 프로퍼티 이름을 사용한다.
// 대괄호([])를 안의 프로퍼티 이름을 문자열로 작성한다.

// * 보통을 코드를 작성할 때는 점 기호를 사용한다.
console.log(user.name); // vi2920va
// * 대괄호 기호는 어떤 key가 필요하지 모를 때 사용한다.
console.log(user['name']); // vi2920va
user['hasJob'] = true;
console.log(user.hasJob); // true

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(user, 'name');
printValue(user, 'age');

// 3. 프로퍼티 단축 속성(Property value shorthand)
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('vi2920va', 30);
console.log(person4); // {name: "vi2920va", age: 30}

// 4. 생성자 함수(Constructor function)
// class가 도입 되기 전에는 생성자 함수를 사용해서 인스턴스를 생성했다.
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in 연산자(operator) : 속성이 명시된 객체 존재하면 true를 반환한다. (key in obj)
console.log('name' in user); // true
console.log('age' in user); // true
console.log('random' in user); // false
console.log(user.random); // undefined

// 6.  for..in VS for..of
// for (key in obj)
// 객체의 프로퍼티를 순회.
console.clear();
for (key in user) {
  console.log(key);
}

// for (value of iterable)
// 반복 가능한 객체(array, map, set, string, arguments)에 대한 반복을 수행.
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. 객체 복제(Fun cloning)
// Object.assign(dest, [obj1, obj2, obj3...])
// 열거 할 수 있는 하나 이상의 출처 객체로 부터 대상 객체로 속성을 복사할 때 사용.
const user2 = { name: 'junwoo', age: 3 };
const user3 = user2;
user3.name = 'coder';
console.log(user2); // {name: "coder", age: 3}

// old way
const user4 = {};
for (key in user2) {
  user4[key] = user2[key];
}
console.clear();
console.log(user4);

const user5 = Object.assign({}, user2);
console.log(user5);

// author example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big
