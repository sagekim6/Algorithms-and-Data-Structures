// 두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.
// 상수는 거꾸로 주어진다.
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [num1, num2] = input.map((el) => [...el].reverse().join(""));
const result = num1 < num2 ? num2 : num1;
console.log(result);

/*

입력받은 상수를 먼저 뒤집어 주고 두수를 비교해주는 간단한 문제였다.

*/
