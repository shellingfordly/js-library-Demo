/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum1 = function (nums, goal) {
  let left = 0
  let right = 1
  let sum = nums[left]
  let count = sum === goal ? 1 : 0
  let list = [sum]

  while (left < nums.length - 1) {
    const rNum = nums[right]
    sum += rNum
    list.push(rNum)
    if (sum === goal) {
      count++
    }
    if (right === nums.length - 1) {
      ++left
      right = left + 1
      sum = nums[left]
      list = [sum]
      if (sum === goal) count++
    } else {
      ++right
    }
  }
  return count
};


var numSubarraysWithSum = function (nums, goal) {
  let sum = 0;
  const cnt = new Map();
  let ret = 0;
  for (const num of nums) {
    cnt.set(sum, (cnt.get(sum) || 0) + 1);
    sum += num;
    ret += cnt.get(sum - goal) || 0;
  }
  console.log(cnt)
  return ret;
};

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2))