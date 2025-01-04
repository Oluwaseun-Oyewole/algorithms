function merge<T>(leftArr: T[], rightArray: T[]) {
  const sortedArray = [];
  while (leftArr.length && rightArray.length) {
    if (leftArr[0] <= rightArray[0]) {
      sortedArray.push(leftArr.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArr, ...rightArray];
}

export default function mergeSort<T>(arr: T[]): T[] | any {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

console.log(mergeSort([8, 20, -2, 4]));
