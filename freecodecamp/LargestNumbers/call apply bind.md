# call / apply / bind

- this는 경우에 따라 바뀐다. 그래서 this를 고정시키는 방법이 있는데 그게 바로 call/apply/bind이다.

## call과 apply

- call과 apply 둘 다 첫 번째 인자로는 this로 설정하고 싶은 값을 넣는다.
- 두 번째 인자로 call은 일반 인자를 바로 넘겨주면 되고 apply는 배열을 넘겨준다.

```javascript
// 일반 함수의 this는 Window객체이다
const introduce = function () {
  console.log(this); // Window 객체
  console.log("Hi! I am " + this.name); // Hi! I am
};
introduce();
```

```javascript
const obj = {
  name: "Sage Kim",
  getName() {
    return this.name;
  },
};

function sayHi(city) {
  console.log(`Hi! I'm ${this.name}, I live in ${city}.`);
}

sayHi("Ulsan"); // Hi! I'm , I live in Ulsan. -> this가 바인딩 되지 않았기 때문에 ${this.name}은 공백으로 나온다.

// call(this 바인딩할 값, 인자)
sayHi.call(obj, "Ulsan"); // Hi! I'm Sage Kim, I live in Ulsan.

// apply(this 바인딩할 값, 배열)
sayHi.apply(obj, ["Ulsan"]); // Hi! I'm Sage Kim, I live in Ulsan.
```

## bind

- this로 바인딩할 값만 전달해 준다.
- 함수를 따로 호출하지 않는다.

```javascript
function plus(num) {
  return num + this.num1 + this.num2;
}

console.log(plus(10)); // NaN

const numberObj = {
  num1: 5,
  num2: 2,
};

const newPlus = plus.bind(numberObj);
console.log(newPlus(10)); // 17
```
