// 1. Use strict
// ES5 부터 적용되는 키워드.
// 안전한 코딩을 하기 위한 하나의 가이드 라인.
'use strict';

// 2. Variable, rw(read/write)
// let (ES6+)
let globalName = 'global name';
{
  let name = 'vi2920';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (var 키워드를 사용해서 변수를 쓰지마!)
// var hoisiting(호이스팅은 어디에 선언 했느냐 상관없이 바로 위로 끌어올려짐을 말한다.)
// var scrope(var는 블럭 스코프를 무시하고,  함수 단위를 스코프를 지원한다.)
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only - 읽기만 가능)
//  상수,  값을 선언함과 동시에  할당한 다음에는 다시 값을 재할당 할 수 없다.
// 가능하면 값이 바뀔 일이 없다면 const를 사용.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// 불변 데이터 타입(Immutable data types) :  원시 타입(premitive types), 불변 객체 (i.e object.freeze())
// 가변 데이터 타입(Mutable data types) : 원시 타입을 제외한 모든 나머지 객체 또는 함수 배열
// 불변 데이터 타입을 사용해야 되는 이유 :
// 	- 보완성(securify)
// 	- 스레드 안전(thread safety)
// 	- 개발자의 실수방지(reduce human mistakes)

// 4. Variable types
// 원시 타입(primitive) : 더 이상 나눠질 수 없는 한 가지 아이템을 의미(single item), number, string, boolean, null, undefiedn, symbol
// 객체(object) : single item들을 여러개로 묶어서 한 단위로 관리(box container)
// 함수(function): 함수도 다른 데이터 처럼 다른 변수에 할당 가능(first-class function)

const count = 17; // 정수(integer)
const size = 17.1; // 소수점(decimal number)
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

// number - 특별한 숫자 값: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt(안정적으로 나타낼 수 있는 최대치인 2**53 -1 보다 큰 정수를 표현할 수 있는 내장 객체)
const bigInt = '12345678901234567890123456789012345678901234567890n';
console.log(`value: ${bigInt}, type : ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string)
console.log(`value :${helloBob}, type : ${typeof helloBob}`);

// booelan
// false : 0, null, undefined, NaN, ' '
// true : 어떤 값
const canRead = true;
const test = 3 < 1; // false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

// null
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

// undefined
let x;
console.log(`value : ${x}, type : ${typeof x}`);

// symbol, crate unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type : ${typeof symbol1}`);

// object, rela-life object, data structure
const user = { name: 'vi2920va', age: 30 };
user.age = 20;

// 5. Dynamic typing : dynamically typed language
// 선언할 때 어떤 타입인지 신경 쓰지 않고, 프로그래밍의 동작할 때 할당된 값에 따라서 변경된다.

let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type : ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`);
console.log(text.charAt(0));
