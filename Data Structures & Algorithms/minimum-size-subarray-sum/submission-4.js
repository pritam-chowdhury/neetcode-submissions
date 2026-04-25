class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
       let sum = 0;
       let res = Infinity;
       let i = 0;
       let j = 0;
       while(j<nums.length){
        sum = sum + nums[j];
        while(sum>=target){
            res = Math.min(res,j-i+1)
            sum = sum - nums[i];
            i++;
        }
        j++;
       }
       return res == Infinity?0 : res;
    }
}
