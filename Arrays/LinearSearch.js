"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = linearSearch;
// O(N)
function linearSearch(haystack, needle) {
    for (let index = 0; index <= haystack.length; index++) {
        if (haystack[index] === needle)
            return true;
    }
    return false;
}
linearSearch([1, 2, 3, 4, 5], 4);
