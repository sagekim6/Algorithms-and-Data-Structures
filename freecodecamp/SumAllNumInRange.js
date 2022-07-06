/* 
Q. 두 정수가 들어있는 배열을 받는 함수다. 
두 수 사이의 정수를 전부 더해라. 단, 제일 작은 숫자가 먼저 온다.

ex. [1, 4] => 1 + 2 + 3 + 4 = 10

*/
function sumAll(arr) {
  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);

// 배열의 요소를 하나씩 분리해야한다는 생각까지는 했지만 Math.max와 min을 쓸 생각은 못했다.
// 처음에는 요소를 [0], [1] 하나씩 변수에 담고 비교할 생각이었는데 이후에 문제를 풀어나가지 못했다.
