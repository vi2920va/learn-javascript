// Loops
// 루프는 어떤 것을 반복적으로 시행할 때 빠르고 간편한 방법을 제공.

// while statement
// 조건이 false로 판별될 때 까지 반복.
let i = 0;
while (i < 5) {
  i = i + 1;
  console.log(`i : ${i}`);
}

// do/while statement
// 조건이 fasle 일지라도 최소 1회는 실행.
let result = '';
let j = 0;
do {
  j = j + 1;
  result = result + j;
  console.log(`j : ${j}, reseult : ${result}`);
} while (j < 5);

// for statement
// for([초기문]; [조건문]; [증감문]){...}
// for문은 괄호로 감싸고 세미콜론으로 구분한 세개의 선택식과 반복을 수행할 문으로 이루어져 있다.

// for 실행흐름
// 1. for문 내에서 let y = 0; 으로 초기 선언.
// 2. 조건 y < 5 을 확인.
// 3. console.log(y)로 출력.
// 4. 증감문을 통해 y 값을 증가.
for (let y = 0; y < 5; y++) {
  console.log(`y : ${y}`);
}

// for/in statement
// 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가느애한 속성에 대해 반복.
const obj = { a: 1, b: 2, c: 3 };
for (const property in obj) {
  console.log(`${property} : ${obj[property]}`);
}

// for/of statement
// 반복 가능한 객체 등을 포함해서 반복.
let arr1 = [10, 20, 30];
for (const value of arr1) {
  console.log(value);
}

// break statement
// 현재 반복문을 종료하고 그 다음 문으로 프로그램 제어를 넘긴
for (let x = 0; x < 10; x++) {
  if (x === 7) {
    break;
  }
  console.log(x);
}

// contiune statement
// break 문과 달리 countiune는 루프의 실행을 종료하지 않고 for문에서는 업데이트 표현식을 점프.
for (let z = 0; z <= 11; z++) {
  if (z % 2 === 0) {
    continue;
  }
  console.log(z);
}
