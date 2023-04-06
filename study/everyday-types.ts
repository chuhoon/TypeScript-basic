const myname: string = "hoon"; // 이런식으로 쓸 수 있지만 대부분의 변수는 타입 추론을 하기에 타입을 따로 작성 하지 않는다.

const typeFunc = (name: string) => {}; //props 타입 표기
const resultFunc = (): string => {
  return "123";
}; // 반환 타입 표기

// const names = ["Alice", "Bob", "Eve"];
// // 함수에 대한 문맥적 타입 부여
// names.forEach(function (s) {
//   console.log(s.toUppercase());
// });
// // 화살표 함수에도 문맥적 타입 부여는 적용됩니다
// names.forEach((s) => {
//   console.log(s.toUppercase());
// });

const objectFunc = (obj: { name: string; age: number }) => {
  console.log(obj.age);
  console.log(obj.name);
};

objectFunc({ name: "hoon", age: 13 });

const objectFunc2 = (obj: { name: string; age?: number }) => {
  console.log(obj.age);
  console.log(obj.name);
};

objectFunc2({ name: "hoon" });

const upperFunc = (obj: { name: string; age: number }) => {
  // name undefined라면 에러
  //   console.log(obj.name.toUpperCase());

  //   맞는 문법
  if (obj.name !== undefined) console.log(obj.name.toUpperCase());
  //  최신 자바스크립트
  console.log(obj.name?.toUpperCase());
};
