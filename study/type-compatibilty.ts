interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

let developer: Developer;
let person: Person;

/*
왼쪽의 타입이 더 크기 때문에 호환이 되지 않음
반대로 오른쪽 타입이 더 크면 타입 호환이 됨
developer = person;
*/

// developer = person;

// 함수
let add = function (a: number) {
  // ...
};

let sum = function (a: number, b: number) {
  // return a + b;
};

sum = add;
// 타입이 더 크기 때문에 add에 sum이 타입호환이 되지 않음
// add = sum;

// 제네릭
interface Empty<T> {
  // ...
}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;
