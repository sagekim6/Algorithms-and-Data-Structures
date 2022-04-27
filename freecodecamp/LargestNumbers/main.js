// Q. 각 배열 중 가장 큰 수만 골라 배열로 반환하라
function largestOfFour(arr) {
  let largestNumsArr = [];

  // apply 메소드에 this 바인딩은 따로 하지 않을 것이기 때문에 첫 번째 인수는 null로 넣어준다.
  for (let i = 0; i < arr.length; i++) {
    largestNumsArr.push(Math.max.apply(null, arr[i]));
    // largestNumsArr.push(Math.max(...arr[i])); -> spread 연산자를 사용해서 풀 수도 있다.
  }

  return largestNumsArr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
// [5, 27, 39, 1001]
