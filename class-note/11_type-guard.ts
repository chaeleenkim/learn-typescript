interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Tony", age: 33, skill: "Iron " };
}
var tony = introduce();
// console.log(tony.skill) // error (union 타입이기 때문에 공통 특성만 접근 가능)

// 타입 단언을 사용하여 매번 확인하면 가독성 떨어지고 번거로움
if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

/* 타입 가드 정의 */
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
