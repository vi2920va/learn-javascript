class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }
  increase(runif5Titems) {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback(this.counter);
    }
  }
}
// 객체를 생성할 때 생성자 함수에 함수를 전달.
const coolCounter = new Counter(printSomething);
function printSomething(num) {
  console.log(`yo! ${num}`);
}
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
