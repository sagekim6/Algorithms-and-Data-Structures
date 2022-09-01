// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let a = parseInt(input[0]);
let sum = 0;
for (let i = 1; i <= a; i++) {
  sum += i;
}
console.log(sum);
