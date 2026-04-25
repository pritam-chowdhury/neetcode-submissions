class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        let suffix =1;
        let prefixArr = [prefix];
        let suffixArr = [];
        for(let i=1;i<nums.length;i++){
            prefixArr[i] = nums[i-1]*prefix;
            prefix = nums[i-1]*prefix;
        }
        suffixArr[nums.length-1] = suffix;
        for(let i=nums.length-2;i>=0;i--){
            suffixArr[i] = nums[i+1]*suffix;
            suffix = nums[i+1]*suffix;
        }
        let result = [];
        for(let i=0;i<nums.length;i++){
            result.push(prefixArr[i]* suffixArr[i])
        }
        return result;
    }
}
