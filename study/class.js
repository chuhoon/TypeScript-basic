// class Person {
//   // 클래스 로직
//   constructor(name, age) {
//     console.log('생성 되었습니다.');
//     this.name = name;
//     this.age = age;
//   }
// }

// let hoon = new Person('경훈', 11);
console.log(hoon); // Person 객체가 찍힘

function Person2(name, age) {
  this.name = name;
  this.age = age;
}
let hoon2 = new Person2('경훈', 12);

let user = {
  name: '경훈',
  age: 12,
};

let admin = {};
admin.__proto__ = user;
console.log(admin.age);
console.log(admin.name);
