// 2+6 = 8이다. 새로운 수는 68이다. 6+8 = 14이다. 새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 새로운 수는 26이다.
// 위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.
// N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let num = input[0];
let sum;
let i = 0;

while (true) {
  i++;

  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (input === num) {
    break;
  }
}

console.log(i);

/*

처음에는 문자열로 풀어보려고 했지만 코드가 점점 길어지고 문자열로 풀기엔 무리가 있는 문제같아 보인다.

<각 자리수를 구하는 수식>
- 1의 자리에 있는 수 구하기: num % 10
- 10의 자리에 있는 수 구하기: Math.floor(num / 10)
- 1의 자리에 있는 수 10의 자리 수로 만들기 : (num % 10) * 10

*/
