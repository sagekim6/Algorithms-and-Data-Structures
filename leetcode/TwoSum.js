/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

정수가 들어있는 배열 nums와 정수인 target변수가 있다. nums 배열에서 두 수를 더했을 때 target의 수가 되는 요소의 인덱스를 리턴해라.
*/
{
  var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (target === nums[i] + nums[j]) return [i, j];
      }
    }
  };
}
/*
Memory Usage: 42.4 MB
Runtime: 107 ms
*/
