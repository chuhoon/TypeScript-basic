const logMessage1 = (value: string) => {
  console.log(value);
};

logMessage1("hi");
// logMessage(100) error
// logMessage(false);

const logMessage2 = (value: string | number) => {
  console.log(value);
};

logMessage2("123");
logMessage2(123);
