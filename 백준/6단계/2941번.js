let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let regExp = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
let result = input.replace(regExp, " ");
console.log(result.length);
