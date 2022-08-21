// 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하면 Yes를 출력한다. 일치하지 않는다면 No를 출력한다.
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let total = parseInt(input[0]);
let num = parseInt(input[1]);
let sum = 0;

// 여러줄 입력 받는 것 주의하기!!
for (let i = 0; i < num; i++) {
  let price = input[i + 2]; // [0 + 2] -> input의 2번 인덱스부터 받아오기
  let priceArr = price.split(" "); // [20000, 2] 로 나눠주기
  let addAllPrice = priceArr[0] * priceArr[1];
  sum += addAllPrice;
}

total === sum ? console.log("Yes") : console.log("No");
