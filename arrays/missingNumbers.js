// arr []  = [1,2,4,5] n = 5 we have to find a missing number in this
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8    1-->9

// brute force solution
function missingNumber(arr, N) {
  for (let i = 0; i <= N; i++) {
    let flag = 0;
    for (let j = 0; j < N; j++) {
      if (arr[j] == i) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      return i;
    }
  }
}

const myArr = [1, 2, 4, 5];
const m = 5;
console.log(missingNumber(myArr, m));

// optimal solution
// solutions will work on leet code because we can't provide nums exactly as the problem. 268 missing numbers leet code
function missingNumber(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return (nums.length * (nums.length + 1)) / 2 - sum;
}
