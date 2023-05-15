var a = 10;
var b = 'abc';

// es 6 기본적으로 10이라는 default 값을 가짐
function getC(c = 10) {
  var d = 'hi';
  return c + d;
}
