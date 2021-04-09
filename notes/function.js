// 함수(Function)
// - 함수는 프로그램을 구성하는 기본 구성 요소.
// - 함수는 여러 번 재사용 할 수 있다.
// - 함수는 한 가지의 작업을 수행하거나 또는 값을 계산할 때 사용한다.

// 1. 함수 선언(Function declaration)
// function name(param1, param2){ body...return;}
// one function === one thing, 하나의 함수는 한 가지의 일만 하도록 작성.
// naming : doSometing, command, verb
// e.g createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log('hello');
}
printHello();

function log(message) {
  console.log(message);
}

log('Hello@');
log(1234);

// 2. 매개변수(Parameters)
// prmitive paramters : passed by valve
// object paramters : passed by reference
function changName(obj) {
  obj.name = 'coder';
}
const user = { name: 'vi2920va' };
changName(user);
console.log(user); // {name : coder}

// 3. 기본 매개변수(Default parmeters, ES6+)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. 나머지 매개변수(Rest parmeters, ES6+)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach(arg => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. 지역 범위(Local scope)
let globalMessage = 'global'; // 전역 변수(global variable)

function printMessage() {
  let message = 'hello';
  console.log(message); // hello,  지역 변수( local variable)
  console.log(globalMessage); // global
  function printAnother() {
    console.log(message); //  hello
    let childMessage = 'hello';
  }
  // 밖에선는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
  // console.log(childMessage); // error
  // return undefined;
}
printMessage();

// 6. 반환 값(Return a value)
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7.이른 반환(Early return), 이른 종료(early exit)
// bad
function upgradeUser(user) {
  // if문과 같은 블럭 안에서 로직을 많이 작성하게 되면 가독성이 떨어진다.
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  // 조건이 맞지 않다면 빠르게 return문을 사용해서 종료.
  if (user.point <= 10) {
    return;
  }
  // 조건이 맞을 때만 필요한 로직을 수행.
  // long upgrade logic...
}

// First-class function
// 함수는 다른 변수와 같이 처리된다.
// 변수에 값으로 할당할 수 있다.
// 인수로 다른 함수에 전달할 수 있다.
// 다른 함수에 의해 반환될 수 있다.

// 1. 함수 표현식(Function expression)
// 함수 선언은 함수를 정의하기 전에 일찍 호출할 수 있다.(hoisted)
// 함수 표현식은 할당된 다음에서야 호출할 수 있다.
const print = function () {
  // 익명 함수(anonymous function)
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. 함수 표현식을 사용한 콜백 함수
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// 익명 함수(anonymous function)
const printYes = function () {
  console.log('yes!');
};

// 기명 함수(named function)
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// 화살표 함수(Arrow function)
// 화살표 함수는 언제나 이름이 없는 익명 함수로 작성한다.
// const simplePrint = function () {
// console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};
// IIFE : 함수를 선언함과 동시에 즉시 호출되는 함수 표현식
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unkonwn command');
  }
}
console.log(calculate('add', 2, 3));
