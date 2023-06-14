// 함수의 반환 값에 타입을 정의하는 방식
function addNum(): number {
  return 10;
}

// 함수의 타입을 정의하는 방식
function sumNum(a: number, b: number): number {
  return a + b;
}

// 함수의 스펙과 일치하지 않으면 오류 발생
// sumNum(10,20,30,40)

// 함수의 옵셔널 파라미터
// 물음표로 필수가 아닌 파라미터를 정의 가능
function log(a: string, b?: string) {}

log("hello ts");
