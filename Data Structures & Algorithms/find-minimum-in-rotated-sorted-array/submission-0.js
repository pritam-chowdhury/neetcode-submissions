class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // If mid element is greater than right, min is to the right
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            // min could be at mid or to the left
            right = mid;
        }
    }

    // When loop ends, left == right and points to min
    return nums[left];
    }
}
