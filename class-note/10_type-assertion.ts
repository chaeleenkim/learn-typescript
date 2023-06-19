/* 타입 단언 */
// as를 사용해서 개발자가 명시적으로 타입 정의
var aa;
aa = 20;
aa = "a";
var b = aa as string;

// DOM API 조작할 때 많이 사용

// <div id="#app">hi</div>

// div가 null이 아님을 보장하기 위해서 타입 단언
var div = document.querySelector("div") as HTMLDivElement;
// div가 있는지 먼저 확인
if (div) {
  div.innerText;
}
