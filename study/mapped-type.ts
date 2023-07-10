type Heroes = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [P in Heroes]: number };
const ages: HeroAges = {
  Hulk: 25,
  Capt: 100,
  Thor: 2,
};

// for in 반복문 코드
let arr = ['a', 'b', 'c'];
for (let key in arr) {
  console.log(key); // index
  console.log(arr[key]);
}
