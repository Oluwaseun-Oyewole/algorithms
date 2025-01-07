function merge<T>(left: T[], right: T[]) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
}

function mergeSort<T>(arr: T[]) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const leftArr = mergeSort(left);
  const rightArr = mergeSort(right);
}
