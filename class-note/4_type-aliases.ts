// interface Person {
//     name:string;
//     age: number;
// }

type PersonType = {
  name: string;
  age: number;
};

var seho: PersonType = {
  name: "세호",
  age: 30,
};

type MyString = string;
var str: MyString = "hello";

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}

/* type과 interface의 차이점
    인터페이스는 확장 가능    ===> 추천
    타입 별칭은 확장 불가능
*/
