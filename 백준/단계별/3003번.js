// 체스는 총 16개의 피스를 사용하며, 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개로 구성
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const chess = [1, 1, 2, 2, 2, 8];

const answer = input.map((it, idx) => {
  return chess[idx] - it;
});

console.log(answer.join(" "));
