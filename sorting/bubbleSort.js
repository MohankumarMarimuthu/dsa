function bubbleSort(param) {
  let temp,
    didSwap = 0;
  for (let i = param.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (param[j] > param[j + 1]) {
        temp = param[j + 1];
        param[j + 1] = param[j];
        param[j] = temp;
        didSwap = 1;
      }
    }
    if (didSwap == 0) {
      break;
    }
  }
  return param;
}

const arr = [13, 11, 46, 24, 0, 0, -3, -5, 52, 20, 9];
const arr2 = [1, 2, 3, 4];

console.log(bubbleSort(arr));
