// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage("hello");
// logMessage(100);

var sehoMan: string | number | boolean;

// Union 타입
function logMessage(value: string | number) {
  // 타입 가드 가능
  // 특정 타입으로 타입의 범위를 필터링하는 과정
  if (typeof value === "number") {
    value.toLocaleString();
  }

  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}

logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  // Union 타입은 타입 간 공통된 속성만 접근 가능
  someone.name;
  //   someone.skill;
  //   someone.age;
}

askSomeone({ name: "디벨로퍼", skill: "웹 개발" });
askSomeone({ name: "캡틴", age: 100 });

// Intersection 타입
var capt: string & number & boolean; // type never

function askSomeone2(someone: Developer & Person) {
  // Intersection 타입은 타입 간 모든 속성 접근 가능
  someone.name;
  someone.skill;
  someone.age;
}

// 타입들에 존재하는 모든 속성을 부여해야 함
askSomeone2({ name: "디벨로퍼", skill: "웹 개발", age: 33 });
