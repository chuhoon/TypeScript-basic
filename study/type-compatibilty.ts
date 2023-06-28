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
