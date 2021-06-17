/**
 * 선택적 연결(Optional Chaning, ES11)
 * '?.'을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근 가능.
 * '?.'은 앞의 평가 대상이 undefined 또는 null 이면 평가를 멈추고 undefined를 반환한다.
 */
{
  const person1 = {
    name: 'vi2920va',
    job: {
      title: 'S/W Enginner',
      manager: {
        name: 'Bob',
      },
    },
  };

  const person2 = {
    name: 'Bob',
  };

  // 💩💩💩💩💩💩
  {
    function printManger(person) {
      console.log(person.job.manager.name);
    }
    printManger(person1); // Bob
    // printMessage(person2);
    // Uncaught ReferenceError: printMessage is not defined
  }

  // 💩💩💩
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }

  // 💩
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }

  // ✨
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1); // Bob
    printManager(person2); // undefined
  }
  console.clear();
}

/**
 * null 병합 연산자(Nullish Coalescing Operator, ES11)
 * ??를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이 '확정되어있는'변수를 찾을 수 있다.
 *
 * false : false, '', 0, null, undefined
 */
{
  {
    const name = 'vi2920va';
    const userName = name || 'Guest';
    console.log(userName); // vi2920va
  }

  // 💩
  {
    const name = null;
    const userName = name || 'Guest';
    console.log(userName); // Guest
  }

  // 💩
  {
    const name = '';
    const userName = name || 'Guest';
    console.log(userName); // Gust

    const num = 0;
    const message = num || 'undefined';
    console.log(message); // undefined
  }

  // ✨
  {
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName); // ''

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message); // 0
  }
}
