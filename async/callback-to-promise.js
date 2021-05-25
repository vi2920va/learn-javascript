'use strict';

// Callvback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'vi2920va' && password === 'developer') ||
          (id === 'coder' && password === 'admin')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'vi2920va') {
          resolve({ name: 'vi2920va', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

// Original code from Youtube course
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
