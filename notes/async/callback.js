'use strict';

// JavaScript is sychronus.
// 호이스팅 된 다음에 코드 블럭 실행.
// 호이스팅(hositiong) : var, function declaration
// 콜백(callback) : 어떤 함수의 요청이 처리되어 나온 그 응답 값을 콜백하여 다음 함수에 사용하는 것은 콜백 이라고 부른다.
console.log('1');
setTimeout(() => {
  console.log('2');
}, 1000);
console.log('3');

// Synchronus Callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));
// Asynchronus Callback
function printWithDelay(print, timeOut) {
  setTimeout(print, timeOut);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callvback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'vi2920va' && password === 'developer') ||
        (id === 'coder' && password === 'admin')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'vi2920va') {
        onSuccess({ name: 'vi2920va', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);