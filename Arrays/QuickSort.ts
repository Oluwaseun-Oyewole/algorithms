// Average case O(n log n), worst case O(n^2)
function partition<P>(arr: P[], low: number, high: number) {
  let index = low - 1;
  const pivot = arr[high];

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      index++;
      [arr[index], arr[j]] = [arr[j], arr[index]];
    }
  }
  [arr[index + 1], arr[high]] = [arr[high], arr[index + 1]];
  return index + 1;
}
function quickSort<Q>(arr: Q[], low: number, high: number) {
  if (low < high) {
    const par = partition(arr, low, high);
    quickSort(arr, low, par - 1);
    quickSort(arr, par + 1, high);
  }
  return arr;
}

export default function quickSortAlgo<T extends number>(arr: T[]): number[] {
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

  return [...quickSortAlgo(left), pivot, ...quickSortAlgo(right)];
}
