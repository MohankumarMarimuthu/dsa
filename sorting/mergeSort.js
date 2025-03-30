function mergeSort(arr, low, high) {
  if (low == high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  mergeArray(arr, low, mid, high);
}

function mergeArray(arr, low, mid, high) {
  const temp = new Array();
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

const sampleArray = [10, 1, 3, 4, 2];
mergeSort(sampleArray, 0, sampleArray.length - 1);
console.log(sampleArray);
