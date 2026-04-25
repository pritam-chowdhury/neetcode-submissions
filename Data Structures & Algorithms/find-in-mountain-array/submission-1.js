/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
    let left = 0;
    let right = mountainArr.length() - 1;
    let pivot = null;

    // Step 1: Find peak
    while (left <= right && pivot === null) {
        let mid = Math.floor((left + right) / 2);
        if (mid > 0 && mid < mountainArr.length() - 1) {
            let leftElm = mountainArr.get(mid - 1);
            let midElm = mountainArr.get(mid);
            let rightElm = mountainArr.get(mid + 1);
            if (leftElm < midElm && rightElm < midElm) {
                pivot = mid;
            } else if (midElm < rightElm) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            break;
        }
    }

    // Step 2: Binary search on ascending part
    left = 0;
    right = pivot;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let val = mountainArr.get(mid);
        if (val === target) return mid;
        if (val < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Step 3: Binary search on descending part
    left = pivot + 1;
    right = mountainArr.length() - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let val = mountainArr.get(mid);
        if (val === target) return mid;
        if (val > target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
    }
}
