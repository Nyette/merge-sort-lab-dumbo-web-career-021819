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

const findMinAndRemove = (firstHalf, secondHalf) => {
  let minFirstHalf = firstHalf[0];
  let minSecondHalf = secondHalf[0];
  if (minFirstHalf < minSecondHalf) {
    return firstHalf.shift();
  } else {
    return secondHalf.shift();
  }
}

const merge = (firstHalf, secondHalf) => {
  let sorted = [];
  let currentMin;
  while (firstHalf.length !== 0 && secondHalf.length !== 0) {
    currentMin = findMinAndRemove(firstHalf, secondHalf);
    sorted.push(currentMin);
  }
  return sorted.concat(firstHalf).concat(secondHalf);
}

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  } else {
    let midpoint = array.length / 2;
    let firstHalf = array.slice(0, midpoint);
    let secondHalf = array.slice(midpoint, array.length);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}
