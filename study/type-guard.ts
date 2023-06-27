interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' };
}

let tony = introduce();
// skill이 안찍힘 이유로는 Developer 와 Person의 공통된 특성만 찍힘
// console.log(tony.skill);

if ((tony as Developer).skill) {
  console.log((tony as Developer).skill);
}

// 타입 가드
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
