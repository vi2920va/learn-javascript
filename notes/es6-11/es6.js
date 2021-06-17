/**
 * 객체 초기자(Shorthand property names)
 * ES6 부터 key/value의 값이 동일한 경우, key만 사용.
 */
{
  const user1 = {
    name: 'vi2920va',
    age: 30,
  };
  const name = 'vi2920va';
  const age = 30;

  // 💩
  const user2 = {
    name: name,
    age: age,
  };

  // ✨
  const user3 = {
    name,
    age,
  };
  console.log(user3); // { name : 'vi2920va', age : 30 }
  console.clear();
}
/**
 * 구조 분해 할당(Destructuring Assignment)
 * 객체 또는 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 JavaScript 식.
 */
{
  // object
  const student = {
    name: 'jun woo',
    level: 1,
  };

  // 💩
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level); // jun woo, 1
  }

  const { name: studentName, level: studentLevel } = student;
  console.log(studentName, studentLevel); // jun woo, 1

  // array
  const fruits = ['🍎', '🍌'];

  // 💩
  {
    const first = fruits[0];
    const second = fruits[1];
    console.log(first, second); // '🍎', '🍌']
  }
  // ✨
  {
    const [first, second] = fruits;
    console.log(first, second); // '🍎', '🍌']
  }
  console.clear();
}
/**
 * 전개 구문(Spread Syntax)
 * 전개 구문의 ...기호를 배열 또는 함수에서 유용하게 사용 가능.
 */
{
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy); // [{...}, {...}] [{...}, {...}]

  const arrayCopy2 = [...array, { key: 'key3' }];
  obj1.key = 'newKey';
  console.log(arrayCopy2); //[key : 'newKey', key : 'key2',  key : 'key3']

  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3); // {key : 'newKey'}

  // 배열 결합(array concatenation)
  const fruits1 = ['🍑', '🍓'];
  const fruits2 = ['🍌', '🥝'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits); // ["🍑", "🍓", "🍌", "🥝"]

  // 객체 병합(object merge)default message
  const dog1 = { dog: '🐕' };
  const dog2 = { dog: '🐶' };
  const dog = { ...dog1, ...dog2 };
  console.log(dog); // {dog: "🐶"}
  console.clear();
}

/**
 * 기본 매개변수(Default parameters)
 * 함수에 null, undefined가 전달될 경우 매개변수의 기본값 설정.
 */
{
  // 💩
  {
    function printMessage(message) {
      if (message === undefined) {
        message = 'default message';
      }
      console.log(message);
    }
    printMessage('hello'); // hello
    printMessage(); // default message
  }
  // ✨
  {
    function printMessage(message = 'default message') {
      console.log(message);
    }
    printMessage('hello'); // hello
    printMessage(); // default message
  }
  console.clear();
}

/**
 * 삼항 조건 연산자(Ternary Operator)
 */
{
  const isCat = true;

  // 💩
  {
    let component;
    if (isCat) {
      component = '😸';
    } else {
      component = '🐶';
    }
    console.log(component); // 😸
  }

  // ✨
  {
    const component = isCat ? '😸' : '🐶';
    console.log(component); // 😸
    console.log(isCat ? '😸' : '🐶');
  }
  console.clear();
}

/**
 * 템플릿 리터럴(Template Literals)
 */
{
  const weather = '🌞';
  const temparature = '31°C';

  // 💩
  console.log(
    'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
  ); // Today weather is 🌞 and temparature is 31°C.

  // ✨
  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
}
