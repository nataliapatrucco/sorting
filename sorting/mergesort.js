function split(array, newArr = []) {
  newArr.push(array.slice(0, array.length / 2));
  newArr.push(array.slice(array.length / 2));

  return newArr;
}

function merge(array1, array2, newArr = []) {
  if (!array1.length) return newArr.concat(array2);

  if (!array2.length) return newArr.concat(array1);

  if (array1[0] > array2[0]) {
    newArr.push(array2.shift());

    return merge(array1, array2, newArr);
  }

  newArr.push(array1.shift());

  return merge(array1, array2, newArr);
}

function mergeSort(array, newArr = []) {
  if (array.length <= 1) return array;
  var [arr1, arr2] = split(array);
  return merge(mergeSort(arr1), mergeSort(arr2));
}
