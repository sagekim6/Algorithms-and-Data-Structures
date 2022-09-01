// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);

if (90 <= a) {
  console.log("A");
} else if (80 <= a) {
  console.log("B");
} else if (70 <= a) {
  console.log("C");
} else if (60 <= a) {
  console.log("D");
} else {
  console.log("F");
}
