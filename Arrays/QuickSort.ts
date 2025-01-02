// Average case O(n log n), worst case O(n^2)
export function quickSort<T>(arr: T[]) {
  function partition<T, Q extends number>(arr: T[], low: Q, high: Q) {
    const pivot = arr[high];
    let idx = low - 1;
    for (let index = low; index < high; index++) {
      if (arr[index] <= pivot) {
        idx++;
        [arr[idx], arr[index]] = [arr[index], arr[idx]];
      }
    }
    [arr[idx + 1], arr[high]] = [arr[high], arr[idx + 1]];
    return idx + 1;
  }

  function qs<T, Q extends number>(arr: T[], low: Q, high: Q) {
    if (low >= high) return;
    const pivotIndex = partition(arr, low, high);
    qs(arr, low, pivotIndex - 1);
    qs(arr, pivotIndex + 1, high);
  }
  qs(arr, 0, arr.length - 1);
  return arr;
}

console.log(quickSort([9, 3, 7, 4, 69]));

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

  return [...quickSort(left), pivot, ...quickSort(right)];
}
