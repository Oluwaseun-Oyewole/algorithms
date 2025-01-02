"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = quickSort;
function qs(arr, low, high) {
    if (low >= high)
        return;
    var pivotIndex = partition(arr, low, high);
    qs(arr, low, pivotIndex - 1);
    qs(arr, pivotIndex + 1, high);
}
function partition(arr, low, high) {
    var pivot = arr[high];
    var idx = low - 1;
    for (var index = 0; index < high; index++) {
        if (arr[index] <= pivot) {
            idx++;
            //   [arr[idx], arr[index]] = [arr[index], arr[idx]];
            var temp = arr[index];
            arr[index] = arr[idx];
            arr[idx] = temp;
        }
    }
    idx++;
    arr[high] = arr[idx];
    arr[idx] = pivot;
    console.log("index --", idx);
    return idx;
}
function quickSort(arr) {
    return qs(arr, 0, arr.length - 1);
}
console.log("cdftvgybhunjimk");
console.log("Quick sort --  ", quickSort([9, 3, 7, 4, 69, 420, 42]));
