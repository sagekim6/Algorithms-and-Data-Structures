// Q. 배열을 정렬하고 두 번째 인자가 배열에 들어갈 경우 그 인덱스를 구하기
function getIndexToIns(arr, num) {
  arr.push(num);
  const indexOfNum = arr.sort((a, b) => a - b).indexOf(num);
  return indexOfNum;
}

console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([2, 20, 10], 19)); // 2

// Chunky Monkey
// Q. 두번째 인자만큼 배열을 자르고 2차원배열로 반환하기
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  console.log(newArr);
}

/**
 *  i += size -> i = 0 + size(2) -> i = 2;
 *  newArr.push(arr.slice(i, i + size)); -> arr.slice(2, 4);
 *
 */

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [['a', 'b'], ['c', 'd']]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // [[0, 1, 2], [3, 4, 5], [6]]
