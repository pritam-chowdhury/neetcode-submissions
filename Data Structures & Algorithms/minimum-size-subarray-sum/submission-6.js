class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
       let i=0;
       let j=0;
       let minlength = Infinity;
       let sum =0;
       while(j<nums.length){
         sum = sum + nums[j];
         while(sum >= target){
            minlength = Math.min(minlength,j-i+1);
            sum = sum-nums[i];
            i++;
         }
         j++;
       }
       return minlength == Infinity ?  0 : minlength;
    }
}
