//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let a = parseInt(input[0]);
for (let i = 1; i <= a; i++) {
  let nums = input[i].split(" ");
  console.log(parseInt(nums[0]) + parseInt(nums[1]));
}
