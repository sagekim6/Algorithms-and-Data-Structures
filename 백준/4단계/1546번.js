// 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70*100이 되어 71.43점이 된다.
// 세준이의 성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램을 작성하시오.
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const scores = input[1].split(" ").map((el) => Number(el));
const max = Math.max(...scores);
const newScore = scores.map((el) => (el / max) * 100);
const addAll = newScore.reduce((acc, current) => {
  return (acc += current);
}, 0);
console.log(addAll / Number(input[0]));
