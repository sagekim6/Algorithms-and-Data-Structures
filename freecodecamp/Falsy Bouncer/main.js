// Q. 배열에서 falsy값 삭제하기
function bouncer(arr) {
  console.log(arr.filter(Boolean));
}

bouncer([7, "ate", "", false, 9]); // [7, 'ate', 9]
bouncer(["a", "b", "c"]); // ['a', 'b', 'c']
