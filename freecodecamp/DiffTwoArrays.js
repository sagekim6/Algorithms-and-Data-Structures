/*
두 배열의 비교해서 중복을 제거하는 문제

- 두 배열을 비교하기 쉽게 하나로 합친다음 filter 메소드를 사용해 값을 걸러준다.
- 배열을 합치는 방법으로는 concat을 사용할 수도 있지만 여기서는 구조 분해 할당을 사용해 두 배열을 하나로 만들었다.
- filter 메소드의 콜백함수에는 includes 함수를 사용했는데
'arr1, arr2 배열이 arr 배열의 요소를 포함하지 않는다'를 ||연산자를 이용해 넣어주었다.
arr 배열의 3번 index를 검색할 때 true값이 나와서 [4]가 리턴된다.


*/

function diffArray(arr1, arr2) {
  const arr = [...arr1, ...arr2];
  const newArr = arr.filter((it) => !arr1.includes(it) || !arr2.includes(it));
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
