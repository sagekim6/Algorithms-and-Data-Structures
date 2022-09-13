// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오.
// 단, 대문자와 소문자를 구분하지 않는다. 대문자로 출력
let input = require("fs").readFileSync("example.txt").toString().split("\n");

const obj = {};

const char = input[0].split("").map((el) => el.toLocaleLowerCase());
for (let i = 0; i < char.length; i++) {
  if (obj[char[i]] === undefined) {
    obj[char[i]] = 1;
  } else {
    obj[char[i]] += 1;
  }
}

let result = "";
let count = 0;

for (el in obj) {
  if (obj[el] > count) {
    count = obj[el];
    result = el.toUpperCase();
  } else if (obj[el] === count) {
    result = "?";
  }
}
console.log(result);

/*

그렇게 어려워보이진 않았지만 멈칫 하게만드는 문제였다.
처음에는 문자열 하나하나를 사용해서 문제를 풀려고 했지만 검색을 해보니 객체를 이용하거나 아스키 코드를 이용하거나
하는 풀이가 있던데 개인적으로 아스키코드가 어렵고 꼭 아스키를 사용하지 않고도 count 하는 식으로
문제를 풀면되지 않나 싶어서 객체를 이용해 문제를 푸니 훨씬 쉽게 풀었다.

반복되는 무언가를 찾거나 뽑아내야한다면 객체를 이용해 푸는게 좋은 방법같다.

 */
