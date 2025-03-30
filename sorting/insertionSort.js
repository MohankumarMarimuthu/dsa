function insertionSort(param) {
  let temp, j;
  for (let i = 0; i <= param.length - 1; i++) {
    j = i;
    while (j > 0 && param[j - 1] > param[j]) {
      temp = param[j - 1];
      param[j - 1] = param[j];
      param[j] = temp;
      j--;
    }
  }
  return param;
}

const arr = [13, 11, 46, 24, 0, 0, -3, -5, 52, 20, 9];

console.log(insertionSort(arr));
