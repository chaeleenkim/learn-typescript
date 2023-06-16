/* 숫자형 이넘 */
// 초기화 하지 않으면 첫 번째 값이 0, 1씩 차례로 증가

/* 문자형 이넘 */

enum Shoes {
  Nike = "나이키",
  Adida = "아디다스",
}

var myShoes = Shoes.Nike;
console.log(myShoes);

// 예제
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  //   if (answer === "yes") {
  //     console.log("정답입니다");
  //   }
  //   if (answer === "no") {
  //     console.log("오답입니다");
  //   }

  if (answer === Answer.Yes) {
    console.log("정답입니다");
  }
  if (answer === Answer.No) {
    console.log("오답입니다");
  }
}

askQuestion(Answer.Yes);
// askQuestion("Yes"); // Error
