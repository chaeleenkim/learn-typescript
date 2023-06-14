interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var who: User = {
  age: 100,
  name: "냥",
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

getUser(who);

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ["a", "b", "c"];
arr[0]; //a

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj = {
  //   sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var capt: Developer = {
  name: "캡틴",
  age: 100,
  language: "ts",
};
