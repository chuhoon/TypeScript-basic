var a;
a = 20;
a = 'a';
var b = a as string;

// Dom 조작
// <div id="app">123</div>

let div = document.querySelector('div');
if (div) {
  div.innerText = 456;
}
