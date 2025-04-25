// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1
// we have to return the number which appear only once

// --> brute force logic
function singleNumber(arr) {
  let flag;
  for (let i = 0; i < arr.length; i++) {
    flag = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j] && i != j) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      return arr[i];
    }
  }
}

const myArray = [4, 1, 2, 1, 2];
console.log(singleNumber(myArray));

// --> optimal approach
function singleNumber(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}

// in optimal approach 1^1 = 0 , 2^2 =0, 3^3 = 0 so same number xor^ same number is 0 but,
// number ^ 0 is number so if we give xor 4^1^2^1^2 => 1^1 = 0, 2^2 = 0 , so it is 4^0^0 so answer is 4;
