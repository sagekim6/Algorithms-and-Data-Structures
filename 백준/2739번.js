// 구구단 출력
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let a = parseInt(input[0]);

for (let i = 1; i <= 9; i++) {
  console.log(`${a} * ${i} = ${a * i}`);
}
