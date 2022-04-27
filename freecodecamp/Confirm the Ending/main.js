// Q. 주어진 문자열로 문장이 끝나는지 체크하고 true 또는 false값으로 리턴하기
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

console.log(confirmEnding("Open sesame", "game")); // false
console.log(confirmEnding("sage kim", "kim")); // true

const str = "아이스아메리카노";
const newStr = str.substring(3);
console.log(newStr); // '아메리카노'
