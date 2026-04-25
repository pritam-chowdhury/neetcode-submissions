class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    // A = [1,3,8]
    // B = [7,9,10,11]
    findMedianSortedArrays(nums1, nums2) {
       let a = nums1, b = nums2;
    let m = a.length, n = b.length;

    // Ensure a is the smaller array
    if (m > n) {
        [a, b] = [b, a];
        [m, n] = [n, m];
    }

    let half = Math.floor((m + n + 1) / 2);
    let left = 0, right = m;

    while (left <= right) {
        let i = Math.floor((left + right) / 2);
        let j = half - i;

        let aLeft  = (i === 0) ? -Infinity : a[i-1];
        let aRight = (i === m) ?  Infinity : a[i];
        let bLeft  = (j === 0) ? -Infinity : b[j-1];
        let bRight = (j === n) ?  Infinity : b[j];

        if (aLeft <= bRight && bLeft <= aRight) {
            // Correct partition
            if ((m+n) % 2 === 1) {
                return Math.max(aLeft, bLeft); // Odd length
            } else {
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
            }
        } else if (aLeft > bRight) {
            right = i - 1;  // Move left
        } else {
            left = i + 1;   // Move right
        }
    }

    }
}
