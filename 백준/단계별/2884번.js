let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);

b -= 45;

if (b < 0) {
  b += 60;
  a--;
  if (a < 0) {
    a = 23;
  }
}
console.log(a + " " + b);
