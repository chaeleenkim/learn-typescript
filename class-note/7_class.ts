class Saram {
  // 클래스에서 사용할 멤버 변수를 먼저 정의
  // 변수의 접근 범위까지 지정 가능
  private name: string;
  public age: number;

  // readonly : 접근만 가능, 값 변경 불가
  readonly log: string;

  // 파라미터 타입 정의
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
