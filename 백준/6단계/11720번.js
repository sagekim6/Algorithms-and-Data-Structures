// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let sum = 0;
for (let i = 0; i < input[0]; i++) {
  sum += +input[1][i];
}
console.log(sum);
