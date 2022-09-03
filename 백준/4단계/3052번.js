// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((val) => +val);

const arr = input.map((el) => el % 42);
const set = new Set(arr);
const rest = [...set];
console.log(rest.length);

/*

Set 객체의 특성을 이용해 문제 풀기
- Set 객체는 중복되지 않는 값의 집합이다.
- Set 요소는 순서를 보장하지 않기 때문에 인덱스로 접근할 수 없다.

*/
