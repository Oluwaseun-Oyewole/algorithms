function recursive_quick_sort<R>(arr: R[]) {}

function partition<P>(arr: P[]) {
  const low = 0;
  const high = arr.length - 1;
  const pivot = arr[high];
  let idx = low - 1;
  for (let index = low; index < high; index++) {
    if (arr[index] >= pivot) {
      idx++;
    }
  }
}
export default function quickSort<T extends number>(arr: T[]): number[] {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left: T[] = [];
  const right: T[] = [];

  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index] <= pivot) {
      left.push(arr[index]);
    } else {
      right.push(arr[index]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
  // return [...quickSort(left), pivot, quickSort(right)];
}
