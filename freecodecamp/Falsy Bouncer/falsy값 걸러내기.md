## Boolean 형변환

- 데이터를 Boolean()으로 감싸준다.
- 자바스크립트에서 false인 값들은  
  `false`, `''`, `0`, `null`, `undefind`, `NaN`이다.

`[7, "ate", "", false, 9]`에서 falsy값들을 골라내기 위해선 먼저 불리언 타입으로 형변환 해준다.

```javascript
Boolean(7); // true
Boolean("ate"); // true
Boolean(""); // false
Boolean(false); // false
Boolean(9); // true
```

## filter() 메소드

- 기본 문법 : `arr.filter(callback)`
- callback함수를 실행하며 조건에 맞는 요소만을 갖는 배열을 반환한다.
- 중복값을 제거해주지 않는다. 따라서 중복값이 나올 수 있다.

`arr.filter(Boolean);`는 `arr.filter( function(x) { return Boolean(x); });`와 같은 의미이다.  
<b>truthy값들만 필터링되어 반환된다.</b>

```javascript
function bouncer(arr) {
  console.log(arr.filter(Boolean));
}

bouncer([7, "ate", "", false, 9]); // [7, 'ate', 9]
```
