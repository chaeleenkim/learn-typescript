// Class : ES2015(ES6)에서 소개된 문법
class Person {
  //클래스 로직

  // 초기화 메서드
  constructor(name, age) {
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}

var babo = new Person("바보", 1000);
console.log(babo);

/* 프로토타입
프로토타입을 사용해서 객체의 속성을 상속받음

admin
    {role : "admin"}
        __proto__:
            age: 100
            name: "capt"

*/

var user = { name: "capt", age: 100 };
var admin = {};
admin.__proto__ = user;

admin.name; //"capt"
admin.age; //100

admin.role = "admin";

// 클래스도 생성자 함수 문법과 동일하게 프로토타입을 사용
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person("captain", 100);
