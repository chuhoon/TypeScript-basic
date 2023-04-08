interface User {
  name: string;
  age: number;
}

// 변수 인터페이스
let person: User = {
  name: 'chu',
  age: 12,
};

const getUser = (user: User) => {
  console.log(user);
};

const user1 = {
  name: 'chu',
  age: 12,
};

getUser(user1);

// 함수의 스펙에 인터페이스 활용
interface sumFunction {
  (a: number, b: number): number;
}

let sum: sumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};
