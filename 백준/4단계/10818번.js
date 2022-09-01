// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let arr = input[1].split(" ");

let numArr = arr.map((el) => Number(el));
console.log(Math.min(...numArr) + " " + Math.max(...numArr));
