class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let sum =0;
        let l = 0;
        let r = 0;
        let result  = Infinity;
        while(r<nums.length){
            sum += nums[r];
            while(sum >= target){
                sum = sum - nums[l]
                result = Math.min(result,r-l + 1);
                l++;
            }
            r++;
        }
        return result == Infinity ? 0 :  result;
    }
}
