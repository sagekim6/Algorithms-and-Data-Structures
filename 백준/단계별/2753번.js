// 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.
// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);

if (a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0)) {
  console.log(1);
} else {
  console.log(0);
}
