// intersection of two sorted arrays
// two pointer approach

function interSectionOfTwoArrays(arr1, arr2) {
  let temp = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] <= arr1[i]) {
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      temp.push(arr1[i]);
      i++;
      j++;
    }
  }
  return temp;
}

const A = [1, 2, 2, 3, 3, 4, 5, 6],
  B = [2, 3, 3, 5, 6, 6, 7];
console.log(interSectionOfTwoArrays(A, B));
