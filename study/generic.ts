// const logText = (text) => {
//   console.log(text);
//   return text;
// };

// logText(10);
// logText("하이");
// logText(true);

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>("1");

// // function logNumber(num: number) {
// //   console.log(num);
// //   return num;
// // }

// logText('1');
// // logText(true);
// // logNumber(10);
// logText(10);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);

logText('a');
logText('1');

// 인터페이스 제네릭 선언 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const objDropdown: Dropdown = { value: 'abc', selected: false };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const objDropdown: Dropdown<string> = { value: 'abc', selected: false };

// 제네릭 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   return text;
// }

// logTextLength<string>('hi');

// 정의된 타입 이용하기 제네릭 타입 제한
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}

logTextLength<string>('hi');

// 제네릭 타입 제한3 keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption('a');

getShoppingItemOption('name');
