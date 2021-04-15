// JSON
// JavaScript Object Notation
// JSON은 JavaScript 객체 문법을 따르는 문자 기반의 데이터 포맷.
// JavaScript의 기본 데이터 타입인 number, string, array, boolean, object를 포함 가능.

// 1. Object to JSON
// stringify(obj)
// JSON.stringify() 메서드는 JavaScript 값 또는 객체를 JSON 문자열로 변환.
// 선택적으로 replacer를 함수로 전달할 경우 변환 전 값을 변형할 수 있고, 배열로 전달할 경우 지정한 속성만 결과에 포함.
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birhDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'vi2920va' : value;
});
console.log(json);

// 2.JSON to Object
// parse(json)
// JSON.parse() 메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성.
// 선택적으로 reviver 함수를 인수로 전달할 경우, 결과를 반환하기 전에 변형.
console.clear();
json = JSON.stringify(rabbit);

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birhDate' ? new Date(value) : value;
});

console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birhDate.getDate());
console.log(obj.birhDate.getDate());