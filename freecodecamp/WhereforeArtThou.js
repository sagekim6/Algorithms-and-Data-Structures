function whatIsInAName(collection, source) {
  const arr = collection.filter((el) => {
    for (let obj in source) {
      if (source[obj] === el[obj]) {
        return true;
      }
    }
    return false;
  });
  return console.log(arr);
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

/*

Q. 두번째 인자가 포함된 요소를 반환해라

처음 문제를 보자마자 생각난 방법은 map과 filter였다. 하지만 객체의 key값을 비교하는 부분에서 막혔는데
filter안에 for...in 문을 사용하는 방법으로 문제를 해결하였다.

*/
