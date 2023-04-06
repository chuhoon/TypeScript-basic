// * 1. 에러 체크
// const message = "kyeonghoon";
// message();

//  * 2. 예외가 아닌 실행 실패
// const user = {
//   name: "kyeong hoon",
//   age: 13,
// };

// console.log(user.location); // 타입스크립트 에러 반환 js에서는 undefined 반환

const changeLowerCase = "Change Me LowerCase";

changeLowerCase.toLocaleLowerCase();
// changeLowerCase.toLacleLowerCase(); // 타입스크립트 호출 불가

// ! 타입 체크
const greet = (person: string, date: Date) => {
  console.log(`${person}은 ${date}에 도착했다.`);
};

// greet("hoon", Date()); // 에러 new Date()
greet("hoon", new Date());

// migration 할 때를 제외한 타입 엄격 검사
