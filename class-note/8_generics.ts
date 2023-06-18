function logText<T>(text: T): T {
  console.log(text);
  return text;
}

// 함수를 호출할 때 넘길 값의 타입을 지정할 수 있음
const stringValue = logText<string>("abc");
stringValue.split("");

const login = logText<boolean>(true);

/* 인터페이스에 제네릭을 선언하는 방법 */

// interface Dropdown {
//     value:string;
//     selected : boolean;
// }
// const obj:Dropdown = {value: 10, selected:false}; //error - value is string

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const obj1: Dropdown<number> = { value: 10, selected: false };
const obj2: Dropdown<string> = { value: "abc", selected: false };

/* 제네릭의 타입 제한 */
// 제네릭에 length라는 속성을 쓰기 위해서 [](배열)로 제한을 둠
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  return text;
}

/* 제네릭의 타입 제한 2 - 정의된 타입 이용하기 */
// extends로 타입 제한
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength2("a");
logTextLength2({ length: 10 });
// logTextLength2(10); // error

/* 제네릭의 타입 제한 3 - keyof */
// 이미 정의된 타입의 key값만을 받을 수 있도록 제한
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption("name");
getShoppingItemOption("price");
