// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let arr = input;
let numArr = arr.map((el) => Number(el));
let maxNum = Math.max(...numArr);
console.log(maxNum);
console.log(numArr.indexOf(maxNum) + 1);
