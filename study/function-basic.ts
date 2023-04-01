// 함수의 파라미터에 타입을 정의하는 방식
const sum = (a: number, b: number) => {
  return a + b;
};
sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
const add = (): number => {
  return 10;
};

// 함수의 타입을 정의하는 방식
const sumAdd = (a: number, b: number): number => {
  return a + b;
};

// 함수 옵셔널 파라미터 '?'
const log = (a: string, b?: string) => {};

log('a');
// log('a', new Person())
