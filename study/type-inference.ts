// 타입 추론 1
var a = 10;
var b = 'abc';

// es 6 기본적으로 10이라는 default 값을 가짐
function getC(c = 10) {
  var d = 'hi';
  return c + d;
}

// 타입 추론 2
// interface DropDown<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem: DropDown<string> = {
//   value: 'down',
//   title: '떨어짐',
// };

// 타입 추론 3
interface DropDown<T> {
  value: T;
  title: string;
}

interface DetailedDropDown<T> extends DropDown<T> {
  description: string;
  tag: T;
}

var detailItem: DetailedDropDown<string> = {
  title: 'abc',
  description: 'abcd',
  value: 'string type', // DropDown extends로 T가 같이 넘어감
  tag: 'string stype',
};
