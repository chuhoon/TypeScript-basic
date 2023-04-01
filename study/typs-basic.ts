// js 선언 방식
const str = 'hello';
const arr = [1, 2, 3];

// TS 선언 방식
const strType: string = 'hello';
const num: number = 10;
const arrType: Array<number> = [1, 2, 3]; // 배열 속 숫자만
const arrStrType: Array<string> = ['a', 'b', 'c']; // 배열 속 문자
const arrNumberType: number[] = [1, 2, 3];

// TS 튜플 : 배열의 index의 타입이 정해져있다.
const address: [string, number, string] = ['강남', 1, '평촌'];

// TS 객체
const obj: object = {};
const person: object = {
  name: 'chu',
  age: 28,
};

// object 구체적인 타입 설정
const personType: { name: string; age: number } = {
  name: 'chu',
  age: 28,
};

// TS 진위값
const show: boolean = true;
