// async & await
// clear style of using  promise :)

// 1. async
// 함수 앞에 async 키워드를 사용하게 되면 해당 함수는 항상 promise를 반환한다.
async function fetchUser() {
  // do network request in 10 secs...
  return 'vi2929va';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. awiat ✨
// await 키워드는 async 함수 안에서만 동작한다.
// JavaScript에서 await 키워드를 만나면 promise가 처리 될 때 까지 기다리고 결과는 그 이후에 반환한다.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFuits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFuits().then(console.log);

// 3. useful Promise AIPs ✨
// Promise.all
// 전체 promise인 배열을 받고 새로운 promise를 반환한다.
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}

// Promise.race
// Promise.all과 비슷하다. 다만 가장 먼저 처리되는 프라미스의 결과(혹은 오류)를 반환한다.
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
