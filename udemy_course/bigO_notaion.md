# Big-O notation(빅오 표기법)

## 1. 필요성

- Big-O를 사용하면 시간복잡도를 빠르게 설명할 수 있다.
- 알고리즘 분석을 빠르게 할 수 있고 언제 무엇을쓸지 빠르게 파악이 가능하다.
- 또한 미래에 어떻게 동작할지 예측할 수 있기 때문에 자신의 코드를 평가할 수 있다.

## 2. What is Big-O notation(빅오 표기법)

알고리즘의 효율은 1분 1초의 시간으로 표현하지 않는다. 왜냐하면 같은 알고리즘이라도 하드웨어 성능에 따라 시간이 차이가 날 수 있기 때문이다.  
따라서 시간(러닝타임)이 아닌 완료까지 걸리는 절차의 수로 결정된다. 완료까지 걸리는 절차의 수로 알고리즘의 효율을 계산한다.

- 알고리즘의 성능을 수학적으로 설명하는 표기법이다.
- 알고리즘의 시간 복잡도와 공간 복잡도를 표현할 수 있다.
- 알고리즘의 실제 러닝타임을 표시하는게 아니라 데이터나 사용자의 증가율에 따른 알고리즘의 성능을 예측하는 게 목표이기 때문에 상수와 같은 숫자는 모두 1이 된다.

## 3. 표기법

1. 산수는 상수로 친다. (덧셈, 뺄셈, 곱셈, 나눗셈)
2. 변수 할당도 상수로 친다.
3. 배열의 요소에 접근하거나 키를 사용해 객체의 요소에 접근하는 것도 상수로 친다.

### O(1) - constant time

입력 데이터의 크기와 상관없이 언제나 일정한 시간이 걸리는 알고리즘을 말한다.  
배열의 크기에 상관없이 언제나 일정한 속도로 값을 반환하고 이런 경우에 'O(1)의 시간 복잡도를 가진다`라고 말한다.

```javascript
// 배열(arr)을 파라미터로 받는 함수
function constant(arr) {
  console.log(arr[0]); // 배열의 길이가 얼마든지 상관없다.
}
```

```javascript
function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
```

5보다 큰 수가 들어오면 무조건 5가 출력된다. 즉, 최대 연산의 최대 갯수는 5가 된다.

### O(n) - linear time

입력값(n)이 10이라면 10번의 동작을 수행한다. 100개의 입력이 들어오면 100번 동작한다.  
&rarr; 즉, 입력 데이터의 크기에 비례해 처리시간이 걸리는 알고리즘을 말한다.

```javascript
// 배열(arr)을 파라미터로 받는 함수
function constant(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 배열을 요소를 하나 하나 콘솔에 출력한다.
  }
}
```

```javascript
function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
```

최소 연산값은 5가되고 5보다 큰 수가 들어오면 해당 수만큼 연산의 수가 늘어난다.  
&rarr; 즉, n의 값은 어떤값이든 될 수 있고 5를 넘어간다면 n의 값에 비례해 연산의 객수가 늘어난다.

### O(n2) - quadratic time

이중 for문 - n개의 데이터를 받으면 첫번째 루프에서 n번 돌면서 각각의 요소를 n번씩 또 돌기 때문에
데이터가 커지면 커질 수록 처리시간이 늘어난다.

```javascript
function constant(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(i + j);
    }
  }
}
```

### O(nm) - quadratic time

m을 n만큼 이중 for문을 돌린다. O(n2)와 비슷한 그래프 모양이 된다.

```javascript
function bigO(n, m) {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < m.length; j++) {
      console.log(i + j);
    }
  }
}
```

### O(n3) - polynomial/cubic time

n을 삼중 for문으로 돌린다. 처리 시간이 O(n2)보다 급격히 늘어난다.

```javascript
function bigO(n) {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      for (let k = 0; k < n.length; k++) {
        console.log(i + j + k);
      }
    }
  }
}
```

### O(2n) - exponential time

피보나치 수열.

### O(log n)

이진 검색(binary search)

### O(sqrt(n))

제곱근이란? 100의 제곱근은 10이다. 10\*10 = 100이기 때문이다. 9의 제곱근은 3이다.

## 공간 복잡도

위의 내용은 시간 복잡도를 설명하는 내용이고 이제는 공간 복잡도를 얘기해보겠다.

- 시간 복잡도: 입력이 커질수록 알고리즘의 실행 속도가 어떻게 바뀌는지 분석하는 것.
- 공간 복잡도: 입력이 커질수록 알고리즘이 얼마나 많은 공간을 차지 하는지 분석하는 것.(사용되는 메모리)

공간 복잡도는 **보조 공간 + 입력 공간을 합친 개념**이다. 그리고 실제로 알고리즘이 실행되는 동안에는 보조 공간만 고려한다.

1. primitive type(원시값)은 상수로 친다. 상수 공간으로 친다.
2. 문자열은 조금 다르다. 문자열은 O(n)이고 만약 n이 문자열의 길이라면  
   3글자인 문자열은 3개의 공간을 차지하고 50글자인 문자열은 50개의 공간을 차지한다.
3. 참조값(배열, 객체)도 대부분 O(n)이라고 한다.

### O(1) 공간

입력의 크기와 차지하는 공간은 아무 상관 없다. 입력의 크기와는 상관없이 항상 공간은 똑같다.

```javascript
// 배열을 받아서 배열 안의 인자를 모두 더하는 함수
function sum(arr) {
  let total = 0; // 첫번째 변수 할당
  for (let i = 0; i < arr.length; i++) {
    // 두번째 변수 할당
    total += arr[i];
  }
  return total;
}
// 이미 선언된 변수에 값을 더하기는 하지만 새로운 변수가 만들어지거나 하지는 않는다.
```

### O(n) 공간

입력값에 비례해 공간의 크기가 늘어난다.

```javascript
// 배열을 받아서 요소에 2를 곱하고 새로운 배열에 넣어서 리턴하는 함수
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]); // 이 부분에서 입력값에 비례해 배열의 길이가 길어진다.
  }
  return newArr;
}
```
