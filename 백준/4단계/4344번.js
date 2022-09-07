// 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);
for (let i = 1; i <= num; i++) {
  let count = 0;
  const scoreArr = input[i].split(" ").map((el) => +el);
  const stdNum = scoreArr.shift();
  let total = scoreArr.reduce((acc, current) => (acc += current), 0);
  let avg = total / stdNum;

  for (let j = 0; j < stdNum; j++) {
    if (scoreArr[j] > avg) {
      count++;
    }
  }

  let overAvg = ((count / stdNum) * 100).toFixed(3);
  console.log(overAvg + "%");
}

/*

< shift 메소드 사용시 주의할 점 >
- 원본 배열을 조작하기 때문에 조심해야한다.

*/
