'use strict';

// Promise
// promise는 자바스크립트에서 비동기 처리에 사용되는 객체.
// 상태(state) : 대기(pending) -> 이행(fullfilled) 또는 실패(rejected)
// Producer VS Consumer

// 1. 생산자(Producer)
// 새로운 promise가 만들어질 때 전달한 exector 함수가 자동으로 실행하고, 상태를 둘 중 하나로 변화시킨다.
// |- new Promise(exector) - state : "padding",   result : undefined
// |-- resolve(value)      - state : "fulfilled", result : value
// |-- reject(error)       - state : "rejected",  result : error
const promise = new Promise((resolve, reject) => {
  // exector : 프로미스가 만들어지면 자동으로 실행하는 함수로 rseolve, reject 중에 반드시 하나를 호출해야한다.

  // 작업량이 많은 작업(네트워크, 파일 읽기)
  console.log('doing something...');

  setTimeout(() => {
    // resolve : 2초 뒤에 일이 성공적으로 끝나면 신호가 전달되면서 value는 'vi2920va'
    // resolve('vi2920va');

    // reject : 2초 뒤에 오류와 함께 실행이 종료되었다는 신호를 보낸다.
    reject(new Error('no network'));
  }, 2000);
});

// 2.소비자(Consumer)
// exector()와 결과나 오류를 받을 소비 함수를 이어주는 역할은 하는데 소비 함수는 then, catch, finally 메서드를 사용해 등록.

promise //
  // then(resolve f, reject f) : promise가 성공 또는 실패했는지 결과를 보여준다.
  .then(value => {
    console.log(value);
  })
  // catch(reject f) : 오류가 발생한 경우 다루는 메서드
  .catch(error => {
    console.log(error);
  })
  // finally(f) : 성공과 실패 여부 상관없이 promise가 처리되면 실행.
  .finally(() => {
    console.log('finally');
  });

// Q1. promise로 지연 만들기
function delay(ms) {
  // 여기에 코드 작성
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('3초 후 실행'));

// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2) // 2
  .then(num => num * 3) // 6
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

// 4. Error Handing
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });

const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} =>🥚`)), 1000);
  });

const cook = agg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${agg} => 🍳`), 10000);
  });

getHen() //
  .then(getEgg)
  .catch(error => {
    return '🥖';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
