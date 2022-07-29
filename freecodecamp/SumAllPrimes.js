/*
Q. Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
1. num과 같거나 작은 소수를 전부 더해라

* 소수(Prime number)란...?
- 자기 자신과 1로만 나눌 수 있는 수. 7은 1 또는 7로만 나눌 수 있다. 하지만 4는 1, 2, 4로 나눌 수 있기 때문에 소수가 아니다.
- 1은 소수가 아니다.
- 음수는 소수가 아니다.

* every(callback)
- 배열의 요소가 전부 조건을 만족하는 검사한다.
- 빈 배열은 true가 된다
- 하나라도 조건을 만족하지 않으면 false가 된다.

*/

function sumPrimes(num) {
  let primes = []; // 소수를 담아둘 빈 배열 선언
  // num과 같거나 작은 소수 구하기 - 1은 소수가 아니므로 i는 2부터 시작
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0)) {
      primes.push(i);
      /*
      2 % [] -> true [2]
      3 % 2 !== 0 -> true [2, 3]
      4 % 2 !== 0 (false), 4 % 3 !== 0 (true) -> 하나라도 기준에 맞지 않으면 false
      5 % 2 !== 0 (true), 5 % 3 !== 0 (true) -> [2, 3, 5]
      ...
      */
    }
  }
  return primes.reduce((acc, el) => acc + el, 0); // reduce 메소드를 사용해 배열의 요솔를 전부 더해준다.
}

console.log(sumPrimes(10)); // 17 -> 2, 3, 5, 7
console.log(sumPrimes(977)); // 73156

// 어떤 수의 합을 구할때 구한 수를 배열에 넣고 reduce 함수를 사용하면 쉽게 구할 수 있다. 또한 배열 메소드를 사용할 수 있다.
