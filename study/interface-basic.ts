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
