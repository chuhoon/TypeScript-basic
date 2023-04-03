const logMessage1 = (value: string) => {
  console.log(value);
};

logMessage1("hi");
// logMessage(100) error
// logMessage(false);

let chu: string | number | boolean;
const logMessage2 = (value: string | number) => {
  // 타입가드 : 특정 타입으로 타입의 범위를 좁혀나가는 필터링 하는 과정
  if (typeof value === "number") {
    value.toLocaleString();
  }

  if (typeof value === "string") {
    value.toString();
  }

  throw new TypeError("value must be string or number");
};

logMessage2("123");
logMessage2(123);
