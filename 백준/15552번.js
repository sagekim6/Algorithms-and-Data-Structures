// 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점
let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let total = parseInt(input[0]);
let answer = "";

for (let i = 1; i <= total; i++) {
  let num = input[i].split(" "); // input[i]의 값을 공백으로 나누기
  answer += parseInt(num[0]) + parseInt(num[1]) + "\n"; // 힌 변수에 담는다.
}

console.log(answer);
