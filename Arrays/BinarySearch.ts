// O(log N)
export default function binarySearch(
  haystack: number[],
  needle: number
): boolean {
  let low = 0;
  let high = haystack.length;
  do {
    const mid = Math.floor(low + (high - low) / 2);
    if (haystack[mid] === needle) return true;
    else if (haystack[mid] > needle) {
      high = mid;
    } else {
      low = mid + 1;
    }
  } while (low < high);
  return false;
}

console.log(binarySearch([1, 2, 3, 3, 5, 6, 7], 6));
