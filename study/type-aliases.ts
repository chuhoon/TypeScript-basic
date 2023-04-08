interface Person1 {
  name: string;
  age: number;
}

type Person2 = {
  name: string;
  age: number;
};

let hoon: Person2 = {
  name: 'hoon',
  age: 28,
};

type MyString = string;

let str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}
// type 은 확장이 불가능하기에 가능한 interface 사용
