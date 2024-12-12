// Given two crystal balls that will break if dropped
// from high enough distance. Determine the exact spot in which it will break
//  in the most optimized way

export default function crystalBall<T>(breaks: T[]) {
  let firstJump = Math.floor(Math.sqrt(breaks.length));
  let index = firstJump;
  for (; index < breaks.length; index += firstJump) {
    if (breaks[index]) breaks;
  }
  console.log(index, "index");
  index -= firstJump;
  for (let j = index; j < breaks.length; j++) {
    if (breaks[index]) return index;
    return -1;
  }
}

console.log(
  "first",
  crystalBall<boolean>([true, false, true, false, true, false, false, false])
);
