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
