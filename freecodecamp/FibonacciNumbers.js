/*
피보나치 수(Fibonacci numbers)
- 어떤 수열의 항이, 앞의 두 항의 합과 같은 수열을 말함
1, 1 -> 1 + 1 = 2
1, 2 -> 1 + 2 = 3
2, 3 -> 2 + 3 = 5
3, 5 -> 3 + 5 = 8
5, 8 -> 5 + 8 = 13
8 + 13 -> 8 + 13 = 21
...

재귀함수를 사용하지 않고 for문을 이용해 피보나치 수를 구하였다.
처음 시작은 1, 1로 시작하니 각각의 수를 변수에 담고 다음에 올 수를 담을 변수도 하나 선언해 놓습니다.
nextNum은 n1과 n2의 합이 되고 그 다음 자릿수를 구하기 위해 n1은 n2가 되고 n1은 nextNum이 됩니다.

*/

function getNum(n) {
  let n1 = 1;
  let n2 = 1;
  let nextNum;
  for (let i = 1; i <= n; i++) {
    //console.log(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
  }
}

getNum(5); // 1, 1, 2, 3, 5

function upToCertainNum(n) {
  let n1 = 1;
  let n2 = 1;
  let nextNum;

  console.log(n1, n2); // 1, 1

  nextNum = n1 + n2; // while문 이전에 nextNum을 더해준다. 안그러면 nextNum은 undefined이므로 while문이 실행되지 않는다.
  while (nextNum <= n) {
    console.log(nextNum); // 2, 3, 5, 8
    n1 = n2;
    n2 = nextNum;
    nextNum = n1 + n2;
  }
}

upToCertainNum(10);
