let input = require("fs").readFileSync("/dev/stdin").toString();

const result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));

/*

< str.fromCharCode(num) >
- 유니코드값을 문자열로 바꿔주는 메소드

< str.charCodeAt(index) >
- 문자를 유니코드로 바꿔주는 메소드

< 대문자 'A'는 유니코드값이 65이다. >
String.fromCharCode(65); -> "A"
String.charCodeAt(A) -> 65

*/
