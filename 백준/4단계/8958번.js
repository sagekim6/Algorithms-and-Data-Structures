// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let count = 0;
  let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    // i번째 배열 요소에 j번째 문자열이 "O"라면 count++ 실행
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    sum += count; // count를 sum 변수에 누적 시킨다.
  }
  console.log(sum);
}
