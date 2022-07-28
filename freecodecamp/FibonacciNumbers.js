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

  //console.log(n1, n2); // 1, 1

  nextNum = n1 + n2; // while문 이전에 nextNum을 더해준다. 안그러면 nextNum은 undefined이므로 while문이 실행되지 않는다.
  while (nextNum <= n) {
    //console.log(nextNum); // 2, 3, 5, 8
    n1 = n2;
    n2 = nextNum;
    nextNum = n1 + n2;
  }
}

upToCertainNum(10);

/*
Q. Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
1. 양의 정수를 파라미터로 받는다.
2. 해당 정수와 같거나 작은 짝수 피보나치 수를 모두 더해라.

일단 해당 정수와 같거나 작은 수의 모든 피보나치 수를 구한다음 filter를 사용해 짝수를 걸러주고 reduce를 사용해 요소를 전부 더해주었다.

*/
function sumFibs(n) {
  let fib = [1, 1];
  let count = 0;
  let nextNum;

  while (n > count) {
    nextNum = fib[count] + fib[count + 1];
    // 처음에 이 부분을(정수와 같거나 작은수만 거르기) 생각하지 못해서 infinity가 나왔었다.
    if (n >= nextNum) {
      fib.push(nextNum);
    }
    count++;
  }
  return fib.filter((el) => el % 2 !== 0).reduce((a, b) => b + a);
}

console.log(sumFibs(4));
console.log(sumFibs(75024));
