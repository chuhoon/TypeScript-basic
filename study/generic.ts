// const logText = (text) => {
//   console.log(text);
//   return text;
// };

// logText(10);
// logText("하이");
// logText(true);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

logText<string>("1");
