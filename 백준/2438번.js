// 별 찍기
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let num = parseInt(input[0]);
let star = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
