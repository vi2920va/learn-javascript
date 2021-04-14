//  배열(Array)

//  1. 배열 선언(Array declaration)
const arr1 = new Array();
const arr2 = [1, 2];

// 2. 배열 요소(Index position)
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]); //apple
console.log(fruits[1]); // banana
console.log(fruits[3]); // underfined
console.log(fruits[fruits.length - 1]);

console.clear();
// 3.  배열 순회(Looping over an array)
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// forEach()는 주어진 callback을 배열 있는 각 요소에 대해 오름차순으로 한 번씩 실행한다.
// 이 때 삭제 되었거나 초기화 하지 않은 인덱스 속성에 대해서는 실행하지 않는다.
// callback은 다음과 같은 세 개의 인수를 함께 호출한다.
//  - value
// - index
// - array

// fruits.forEach(function (fruit, index) {
//   console.log(fruits, index);
// });
fruits.forEach(fruit => console.log(fruit));

// 4. Addtion, delete, copy
// push : 배열 끝에 아이템 추가.
fruits.push('mango', 'strawberry');
console.log(fruits); // ["apple", "banana", "mango", "strawberry"]

// pop :  배열 끝에 있는 아이템 제거.
fruits.pop();
fruits.pop();
console.log(fruits); // ["apple", "banana"]

// unshift : 배열 앞에 아이템 추가.
fruits.unshift('lemon');
console.log(fruits); // ["lemon", "apple", "banana"]

// shift : 배열 앞에 아이템 추가
fruits.shift();
console.log(fruits); // ["apple", "banana"]

// note!
// 배열의 메서드  unshift와 shift는 pop과 push 보다 느리다.
// splice : 배열의 기존 요소를 삭제 또는 교체하거나 새요소를 추가해 내용을 변경.
// splice는 두 번째 매개변수 deleteCount를 지정하지 않으면 시작하는  인덱스 부터 모두 지운다.
fruits.push('mango', 'strawberry', 'lemon');
console.log(fruits); // ["apple", "banana", "mango", "strawberry", "lemon"]
fruits.splice(1, 1);
console.log(fruits); // ["apple", "mango", "strawberry", "lemon"]
fruits.splice(1, 1, 'peach', 'watermelon');
console.log(fruits); // ['apple', 'peach', 'watermelon', 'strawberry', 'lemon'];

// 배열 결합(combine two arrays)
const fruits2 = ['coconut', 'durian'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); //  ["apple", "peach", "watermelon", "strawberry", "lemon", "coconut", "durian"]

// 5. Searching
// find the index
// indexOf()메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1를 반환.
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.indexOf('lemon')); // 4
console.log(fruits.indexOf('avocado')); // -1

// includes
// includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별.
console.log(fruits.includes('avocado')); // false
console.log(fruits.includes('strawberry')); // true

// lastIndexOf
// lastIndexOf() 메서드는 배열에서 주어진 값을 발견할 수 잇는 마지막 인덱스를 반환하고 존재하지 않으면 -1를 반환.
console.clear();
fruits.push('apple');
console.log(fruits); //  ["apple", "peach", "watermelon", "strawberry", "lemon", "apple"]
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.lastIndexOf('apple')); // 5


