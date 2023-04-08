let capt: string & number & boolean; // 불가능한 타입

interface Developer1 {
  name: string;
  skill: string;
}

interface Person1 {
  name: string;
  age: number;
}

function askSomeone(someone: Person1 | Developer1) {
  // 교집합 (유니언)
  // someone.name;
  // someone.age;
  // someone.skill;
}

askSomeone({ name: 'hoon', skill: '웹 개발' }); // develop1이거나
askSomeone({ name: 'hoon', age: 10 }); // person1이거나
// 상대적으로 유니언 타입이 많이 쓰임

function askSomeone2(someone: Person1 & Developer1) {
  // 합집합 (인터섹션)
  someone.name;
  someone.age;
  someone.skill;
}

// askSomeone2({ name: 'hoon', skill: '웹 개발' }); 에러 2개만이 아닌 모든 타입 다 들어가야함
askSomeone2({ name: 'hoon', skill: '웹 개발', age: 22 });
