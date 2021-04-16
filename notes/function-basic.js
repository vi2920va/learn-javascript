// Don't give up
// 포기 하지마 👐

// 1. 함수 선언(Function declarations)
// 함수를 선언 할 때에는 인자들을 정의해서 코드 블럭 작성한다.
// 함수를 선언만 하고 호출하지 않으면 작성한 코드 블럭은 수행되지 않는다.
function myfun() {
  console.log('hello');
}

function doSomething(avg) {
  console.log(avg);
  const result = avg(12, 3);
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

function avg(a, b) {
  return a / b;
}
function surprise(operator) {
  const result = operator(55, 10); // add(55, 10)
  console.log(result);
}

// 2. 함수 호출(Function calling)
// 함수의 호출 방법은 함수 이름 옆에 괄호를 써서 함수 선언에서 정의한 매개변수를 인자로 전달해서 함수를 실행한다. ex) myfun()
// 함수는 다른 변수에 할당할 수 있고, 다른 함수의 인자로 전달할 수 있는데 이 경우에는 함수를 실행하지 않고, 함수 이름만 전달해야 한다. ex) doSometing(avg)
// 즉, 다른 함수의 인자로 함수를 전달할 경우 함수 이름이 함수 자체 이기 때문에 실행할 필요가 없다는 걸 의미한다.
myfun();

// 3. 값을 리턴하는 함수
// result 변수를 선언함과 동시에 add 함수를 실행하고, add 함수 결과값으로 sum 변수를 전달한다.
// 전달 받은 sum 변수의 값은 result 변수에 할당되게 된다.
const result = add(1, 2);
console.log(result);

// 4. 함수를 인자로 전달
// 함수를 전달할 때에는 함수 이름만 전달한다.
doSomething(avg);
surprise(add);

// 5. 함수를 변수에 할당
const avgFun = avg;
avgFun(5, 20);
