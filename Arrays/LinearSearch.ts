// O(N)
export default function linearSearch<T>(haystack: T[], needle: T) {
  for (let index = 0; index <= haystack.length; index++) {
    if (haystack[index] === needle) return true;
  }
  return false;
}

linearSearch([1, 2, 3, 4, 5], 4);
