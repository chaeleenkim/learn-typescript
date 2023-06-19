/* 타입 추론 기본 1 */
var a = 10;

// 기본값을 설정하면 기본값의 타입으로 추론
function getB(b = 10) {
  var c = "hi";
  // number과 string을 더하면 string이 되기 때문에
  // 리턴값도 자동으로 string으로 추론
  return b + c;
}

/* 타입 추론 기본 2 - 인터페이스와 제네릭을 이용한 타입 추론 */
// interface Dropdown<T> {
// value: T;
// title : string;
// }
// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title : 'hello'
// }

/* 타입 추론 기본 3 - 복잡한 구조에서의 타입 추론 방식 */
interface Dropdown<T> {
  value: T;
  title: string;
}

// DetailedDropdown이 받는 타입을 Dropdown에도 적용
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: "abc",
  description: "ab",
  value: "c",
  tag: "hello",
};

/* Best Common Type의 추론 방식 */
// Union으로 묶어서 추론
var arr = [1, 2, true]; // [number | boolean]
