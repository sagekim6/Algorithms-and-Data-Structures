function destroyer(arr, ...args) {
  const filtered = arr.filter((it) => !args.includes(it));
  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*

첫번째 매개변수인 배열에서 그 뒤에 주어지는 매개변수와 같은 인자를 제거해라

우선 첫번째 매개변수 이후에 들어오는 매개변수를 구조 분해 할당을 이용해 하나의 배열의 형태로 받아오고
filter 메소드를 사용해 두 배열의 중복을 제거하는 방식으로 문제를 풀었다.

*/
