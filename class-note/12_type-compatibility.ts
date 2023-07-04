// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  skill: string;
}

class Person {
  name: string;
}

var developer: Developer;
var person: Person;

// 오른쪽에 있는 타입이 더 많은 속성을 가지거나
// 구조적으로 더 큰 경우에만 타입 호환 가능
// developer = person;
person = developer;
developer = new Person();

/* 함수 */
var add = function (a: number) {
  //...
};

var sum = function (a: number, b: number) {
  //...
};

// 함수의 크기가 더 큰 쪽이 왼쪽에 있어야 호환 가능
// add = sum;
sum = add;

/* 제네릭 */
interface Empty<T> {
  //...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notempty1: Empty<string>;
var notempty2: Empty<number>;
notempty1 = notempty2;
notempty2 = notempty1;
