// O(N)
export default function linearSearch(
  haystack: number[],
  needle: number
): boolean {
  for (let index = 0; index <= haystack.length; index++) {
    if (haystack[index] === needle) return true;
  }
  return false;
}

console.log(linearSearch([1, 2, 3, 4, 5], 4));
