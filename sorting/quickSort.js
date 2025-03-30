function quickSort(arr, low, high) {
  if (low < high) {
    const partionIndex = findPartionIndex(arr, low, high);
    quickSort(arr, low, partionIndex - 1);
    quickSort(arr, partionIndex + 1, high);
  }
}

function findPartionIndex(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (arr[i] <= pivot && i < high) {
      i++;
    }

    while (arr[j] > pivot && j > low) {
      j--;
    }

    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, low, j);
  return j;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const sampleArray = [10, 1, 3, 4, 2];
const sampleArray1 = [10, 15, 30, 24, 2];
quickSort(sampleArray1, 0, sampleArray1.length - 1);
quickSort(sampleArray, 0, sampleArray.length - 1);
console.log(sampleArray1);
console.log(sampleArray);

const sortedArray = [1, 2, 3, 4, 5];
quickSort(sortedArray, 0, sortedArray.length - 1);
console.log("Test Case 1 - Already Sorted:", sortedArray);

// Test Case 2: Array in Reverse Order
const reverseArray = [5, 4, 3, 2, 1];
quickSort(reverseArray, 0, reverseArray.length - 1);
console.log("Test Case 2 - Reverse Order:", reverseArray);

// Test Case 3: Array with Negative Numbers
const arrayWithNegative = [10, -5, 3, -1, 7, -2];
quickSort(arrayWithNegative, 0, arrayWithNegative.length - 1);
console.log("Test Case 3 - With Negative Numbers:", arrayWithNegative);

// Test Case 4: Array with Duplicates
const arrayWithDuplicates = [3, 5, 3, 2, 5, 1];
quickSort(arrayWithDuplicates, 0, arrayWithDuplicates.length - 1);
console.log("Test Case 4 - With Duplicates:", arrayWithDuplicates);

// Test Case 5: Array with Single Element
const singleElementArray = [10];
quickSort(singleElementArray, 0, singleElementArray.length - 1);
console.log("Test Case 5 - Single Element:", singleElementArray);

// Test Case 6: Array with All Same Elements
const allSameElements = [7, 7, 7, 7, 7, 7];
quickSort(allSameElements, 0, allSameElements.length - 1);
console.log("Test Case 6 - All Same Elements:", allSameElements);

// Test Case 7: Large Array of Random Numbers
const largeArray = [34, 7, 23, 32, 5, 62, 32, 12, 15, 98, 26, 43];
quickSort(largeArray, 0, largeArray.length - 1);
console.log("Test Case 7 - Large Array of Random Numbers:", largeArray);

// Test Case 8: Array with Floating Point Numbers
const floatArray = [2.5, 1.1, 3.3, 0.7, 4.6];
quickSort(floatArray, 0, floatArray.length - 1);
console.log("Test Case 8 - Floating Point Numbers:", floatArray);

// Test Case 9: Empty Array
const emptyArray = [];
quickSort(emptyArray, 0, emptyArray.length - 1);
console.log("Test Case 9 - Empty Array:", emptyArray);

// Test Case 10: Array with Large Numbers
const largeNumbers = [100000, 2000000, 500000, 150000, 999999];
quickSort(largeNumbers, 0, largeNumbers.length - 1);
console.log("Test Case 10 - Large Numbers:", largeNumbers);

// Test Case 11: Array with Strings (Alphabetical Order)
const stringArray = ["apple", "banana", "grape", "cherry", "kiwi"];
quickSort(stringArray, 0, stringArray.length - 1);
console.log("Test Case 11 - String Array:", stringArray);

// Test Case 12: Array with Mixed Types (Integers and Floats)
const mixedArray = [5, 2.5, 3, 1.1, 4];
quickSort(mixedArray, 0, mixedArray.length - 1);
console.log("Test Case 12 - Mixed Types (Integers and Floats):", mixedArray);

// pick a pivot
// find a element from left side which is greater than pivot stop there
// find a element from right side which is smaller than pivot stop there
// swap two
// use two pointer approach
// right and left should not cross , if it crosses stop the loop and swap
