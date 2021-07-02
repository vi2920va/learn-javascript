// this - call, apply, bind

// 1. 함수의 호출 방식에 의해 결정되는 this
// 함수는 호출 될 때 마다 매개변수로 전달되는 인자값 외에, arguments  객체와 this를 암묵적으로 전달 받는다.

// 2. 함수 호출
// 일반 함수를 호출 할 때 this는 전역 객체인 window와 같다.
function talk() {
  if (window === this) {
    console.log('YES');
  }
}
talk();

// 3. 객체의 메서드로 호출
// 객체의 메서드의 this는 그 객체를 가리킨다.
const dog = {
  name: 'tori',
  print: function () {
    console.log(this.name);
  },
};

dog.print(); // tori

// 4. 생성자 함수 호출
// new 연산자와 함께 생성자 함수를 호출하면 this는 생성자 함수를 통해 생성될 그 객체를 가리킨다.
function User(name) {
  // 생성자 함수 코드 실행 전 - this는 빈 객체를 가리킨다.
  this.name = name; // this를 통한 프로퍼티 메서드 생성 - 생성된 프로퍼티/메서드는 생성된 객체 추가.
  // 생성된 객체 반환 - this에 바인딩된 새로 생성한 객체가 반환.
}

const user = new User('lee');
console.log(user.name); // lee

// call, apply, bind
// 함수 호출 방식과 관계없이 this를 지정할 수 있다.

// 5. func.call([thisObj[, arg1 [, arg2[, ...]]]])
// call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정 가능.
const mike = {
  name: 'Mike',
};

const tom = {
  name: 'Tom',
};

function showThisName() {
  console.log(this.name);
}
showThisName(); // window.name = '';
showThisName.call(mike); // Mike
showThisName.call(tom); // Tom

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(mike, 1990, 'singer');
console.log(mike); // {name: "Mike", birthYear: 1990, occupation: "singer"}

update.call(tom, 1988, 'doctor');
console.log(tom); // {name: "Tom", birthYear: 1988, occupation: "doctor"}

// 6. func.apply([thisObj[, arg1 [, arg2[, ...]]]])
// apply는 함수 매개 변수를 처리하는 방법을 제외하면 call과 완전히 같다.
// call 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받는다.
const nums = [101, 99, 111, 77, -1, 10, 89, 7];

const minNum = Math.min.apply(null, nums);
console.log(minNum); // -1

const maxMum = Math.max.call(null, ...nums);
console.log(maxMum); // 111

// 7. func.bind(thisArg[, arg1[, arg2[, ...]]])
// 함수의 this를 영구히 바꿀 수 있다.

// bind는 새로 바인딩을 함수를 하나 만들어서 함수가 항상 this가 되도록 한다.
const updateMike = update.bind(mike);
updateMike(1990, 'police');
console.log(mike); // {name: "Mike", birthYear: 1990, occupation: "police"}

const person = {
  name: 'Tom',
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};

person.showName(); // hello, Tom

let fn = person.showName;
fn(); // hello,
fn.call(person);
fn.apply(person);

let boundFn = fn.bind(person);
boundFn();
