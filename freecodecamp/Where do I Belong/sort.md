# 배열 정렬하기

## sort() 메소드

- 기본 문법 : `arr.sort(compareFunction)`
- 배열을 정렬한 뒤 그 배열을 리턴합니다.(원본 배열을 복사한다)

```javascript
const arr1 = [1, 3, 5, 4, 2];
const sortedArr1 = arr1.sort();
console.log(sortedArr1); // [1, 2, 3, 4, 5]
console.log(arr1); // [1, 2, 3, 4, 5]
```

- 인자를 문자열로 변환후 유니코드로 비교한다.

```javascript
const arr2 = [1, 4, 10, 5, 11];
const sortedArr2 = arr2.sort();
console.log(sortedArr2); // [1, 10, 11, 4, 5]
// [1, 4, 5, 10, 11] -> 이런 결과를 기대했겠지만 결과는 [1, 10, 11, 4, 5] 이렇게 나온다
```

### 비교함수(compareFunction)

- 원하는 조건으로 배열을 벙렬하기 위해 비교함수를 지정해 준다.

1. 오름차순 : 진행할수록 올라감 (ex. 1, 2, 3, 4, 5...)

```javascript
const arr2 = [1, 4, 10, 5, 11];
const asc = arr2.sort((a, b) => a - b);
console.log(asc); // [1, 4, 5, 10, 11]
```

2. 내림차순 : 진행할수록 내려감 (ex. 5, 4, 3, 2, 1...)

```javascript
const arr2 = [1, 4, 10, 5, 11];
const desc = arr2.sort((a, b) => b - a);
console.log(desc); // [11, 10, 5, 4, 1]
```

```javascript
// Q. 배열을 정렬하고 두 번째 인자가 배열에 들어갈 경우 그 인덱스를 구하기
function getIndexToIns(arr, num) {
  // 1. num을 arr배열에 먼저 넣어준다
  arr.push(num);
  // 2. 해당 배열을 오름차순으로 정렬한 후 num의 인덱스를 찾아준다.
  const indexOfNum = arr.sort((a, b) => a - b).indexOf(num);
  // 3. num의 인덱스 반환
  return indexOfNum;
}

console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([2, 20, 10], 19)); // 2
```
