enum Shoes {
  Nike,
  Adidas,
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0 별도의 값을 지정하지 않으면 숫자로 지정함 adidas는 1

enum Shirt {
  Nike = '나이키',
  Adidas = '아디다스',
}

let myShirts = Shirt.Adidas;
console.log(myShirts);

enum Answer {
  Yes = 'Y',
  No = 'N',
}

const askQuestion = (answer: Answer) => {
  if (answer === Answer.Yes) console.log('정답');
  if (answer === Answer.No) console.log('오답');
};
askQuestion(Answer.Yes);
askQuestion(Answer.No);
// askQuestion('예스');
// askQuestion('No');
// askQuestion('Yes');
