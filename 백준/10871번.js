// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let a = input[0].split(" ");
let b = input[1].split(" ");

for (let i = 0; i < a[0]; i++) {
  if (Number(b[i]) < Number(a[1])) {
    console.log(Number(b[i]));
  }
}
