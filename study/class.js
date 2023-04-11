class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
  }
}

let hoon = new Person('경훈', 11);
console.log(hoon); // Person 객체가 찍힘
