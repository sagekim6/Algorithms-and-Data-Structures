let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let result = 0;

let num = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

for (let i = 0; i < input[0].length; i++) {
  for (let j = 2; j <= 9; j++) {
    if (num[j].includes(input[0][i])) {
      result += j + 1;
    }
  }
}
console.log(result);

/*

가끔 질문 자체를 이해하기 어려울 때가 있는 것 같다.
질문을 꼼꼼히 잘 읽어보고 이해하려는 노력이 더 필요한 것 같다.

*/
