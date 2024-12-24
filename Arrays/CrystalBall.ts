// Given two crystal balls that will break if dropped
// from high enough distance. Determine the exact spot in which it will break
//  in the most optimized way

// O(N^2)
export default function crystalBall<T>(breaks: T[]) {
  let firstJump = Math.floor(Math.sqrt(breaks.length));
  let index = firstJump;
  for (; index < breaks.length; index += firstJump) {
    if (breaks[index]) breaks;
  }
  index -= firstJump;
  for (let j = index; j < breaks.length; j++) {
    if (breaks[index]) return index;
    return -1;
  }
}

crystalBall<boolean>([
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  false,
  true,
]);

crystalBall<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
