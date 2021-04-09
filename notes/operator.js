// 1. 문자열 연결(String concatenation)
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2 = ${1 + 2}`);

// 2. 사칙 연산(Numeric operators)
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. 증감 연산자, 감소 연산자(Increment and decrement oprators)
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = couneter;
console.log(`preIncrment : ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement}, counter : ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement}, counter : ${counter}`);

// 4. 할당 연산자(Assignment operators)
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y

// 5. 비교 연산자(Comparison operators)
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. 논리 연산자(Logical operators) : || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or : ${value1 || value2 || check()}`);

// && (and), finds the first truthy value
console.log(`and : ${value1 && value2 && check()}`);

// often used to compress long if-statement
function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('😱');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. 동등(Equality)
const stringFive = '5';
const numberFive = 5;

// == 느슨한 동등, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === 엄격한 동등, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const user1 = { name: 'vi2920va' };
const user2 = { name: 'vi2920va' };
const user3 = user1;
console.log(user1 == user2); // false
console.log(user1 === user2); // false
console.log(user1 === user3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // false
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8.  조건문(Conditional ioperators) : if
// if, else if, else
const name = 'Java';
if (name === 'JavaScript') {
  console.log('Welcome, JavaScript');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

//  9. 조건 삼항 연산자(Ternary operator) : ?
// codition ? value1 : value2;
console.log(name === 'vi2920va' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. 반복문(Loops)
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
