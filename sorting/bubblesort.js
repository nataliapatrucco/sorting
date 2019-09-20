function swap(array, a, b) {
  var save = array[a];
  array[a] = array[b];
  array[b] = save;
  return array;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        array = swap(array, j, j + 1);
      }
    }
  }
  return array;
}
