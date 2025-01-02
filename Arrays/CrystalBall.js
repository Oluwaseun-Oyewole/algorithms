"use strict";
// Given two crystal balls that will break if dropped
// from high enough distance. Determine the exact spot in which it will break
//  in the most optimized way
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = crystalBall;
// O(N^2)
function crystalBall(breaks) {
    let firstJump = Math.floor(Math.sqrt(breaks.length));
    let index = firstJump;
    for (; index < breaks.length; index += firstJump) {
        if (breaks[index])
            break;
    }
    index -= firstJump;
    for (let j = index; j < breaks.length; j++) {
        if (breaks[index])
            return j;
        return -1;
    }
}
// crystalBall<boolean>([
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   false,
//   true,
// ]);
console.log(crystalBall([1, 2, 3, 4, 5, 6, 7, 8]));
