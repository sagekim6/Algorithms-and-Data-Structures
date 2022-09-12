let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= +input[0]; i++) {
  let result = "";
  const [num, str] = input[i].split(" ");
  for (let j = 0; j < str.length; j++) {
    result += str[j].repeat(num);
  }
  console.log(result);
}

/*

< string.repeat(count) >
- 문자열을 반복한 값을 반환한다.

'abc'.repeat( 2 ) -> 'abcabc'

*/
