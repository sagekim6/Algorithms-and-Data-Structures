let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let str = input.join();

const aski = str.charCodeAt(0);
console.log(aski);

/*

< str.charCodeAt(index) >
- 아스키 코드값을 반환하는 메소드
- index는 기본으로 0을 사용한다.

*/
