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

// 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; // 'a'

interface StringRegexDictionary {
  [key: string]: RegExp; // 왼쪽 name key로 정의
}

let obj: StringRegexDictionary = {
  name: /abc/,
  cssFile: /\.css$/,
  // css: 'css',
};

// Object.keys(obj).forEach(function (value) {});
// obj['cssFile'] = 'a'; // 에러

// 인터페이스 확장 상속
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  // name: string;
  // age: number; 확장 받음
  language: string;
}

// 상속 받은 모든 타입 확장
let captin: Developer = {
  name: 'hoon',
  age: 21,
  language: 'korean',
};
