class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const n = nums.length;
       for(let i=0;i<nums.length;i++){
        if(nums[i] < 0){
            nums[i] = 0
        }
       }

       for(let i=0;i<nums.length;i++){
         const val = Math.abs(nums[i]);
    if (val >= 1 && val <= n) {
        if (nums[val - 1] > 0) {
            nums[val - 1] *= -1;   // mark as visited
        } else if (nums[val - 1] === 0) {
            nums[val - 1] = -1 * (n + 1);  // special marker
        }
    }
       }
       for (let i = 1; i <= n; i++) {
            if (nums[i - 1] >= 0) {
                return i;
            }
        }

        return n + 1;
    }
    
}
