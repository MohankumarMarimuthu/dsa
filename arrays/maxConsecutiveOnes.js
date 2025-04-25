function maxConsecutiveOnes(nums) {
  let temp = 0,
    max = 0;
  for (let i = 0; i < nums.length; i++) {
    temp = nums[i] === 1 ? temp + 1 : 0;
    max = temp > max ? temp : max;
  }
  return max;
}

const myArr = [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1];
console.log(maxConsecutiveOnes(myArr));
