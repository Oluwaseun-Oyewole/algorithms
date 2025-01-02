"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BubbleSort;
exports.simpleBubbleSort = simpleBubbleSort;
// O(n²)
function BubbleSort(arr) {
    for (let index = 0; index < arr.length; index++) {
        for (let j = 0; j < arr.length - 1 - index; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// O(n log n)
function simpleBubbleSort(array, compareFn) {
    return array.sort(compareFn);
}
BubbleSort([5, 4, 2]);
BubbleSort(["banana", "apple", "cherry"]);
simpleBubbleSort([5, 4, 2], (a, b) => a - b);
simpleBubbleSort(["banana", "apple", "cherry"], (a, b) => a.localeCompare(b));
