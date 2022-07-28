/*
Q. Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
1. num과 같거나 작은 소수를 전부 더해라

* 소수(Prime number)란...?
- 자기 자신과 1로만 나눌 수 있는 수. 7은 1 또는 7로만 나눌 수 있다. 하지만 4는 1, 2, 4로 나눌 수 있기 때문에 소수가 아니다.

*/

function sumPrimes(num) {
  for (let i = 1; i <= num; i++) {
    if (i / i === 1 && i / 1 === i) {
      console.log(i);
    }
  }
}

sumPrimes(10); // 17 -> 2, 3, 5, 7
//sumPrimes(977); // 73156
