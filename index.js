const findMinAndRemoveSorted = (array) => {
  let min = array[0];
  let minIndex;
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}
