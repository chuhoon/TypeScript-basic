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

function logText(text: string) {
  console.log(text);
  //   text.split("").reverse().join();
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

logText("1");
logText(true);
logNumber(10);
logText(10);
