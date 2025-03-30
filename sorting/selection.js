function selectionSort(param) {
  let min, temp;
  for (let i = 0; i <= param.length - 2; i++) {
    min = i;
    for (let j = i + 1; j <= param.length - 1; j++) {
      if (param[j] < param[min]) {
        min = j;
      }
    }
    temp = param[i];
    param[i] = param[min];
    param[min] = temp;
  }
  return param;
}

const arr = [13, 11, 46, 24, 0, 0, -3, -5, 52, 20, 9];
const arr1 = [4, 1, 3, 9, 7];

console.log(selectionSort(arr1));
