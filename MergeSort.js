const arrayToBeSorted = [105, 79, 100, 110];

function mergeArray(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeArray(left), mergeArray(right));
}

console.log(mergeArray(arrayToBeSorted));

function merge(left, right) {
  const newArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      newArray.push(left.shift());
    } else {
      newArray.push(right.shift());
    }
  }

  return [...newArray, ...left, ...right];
}
