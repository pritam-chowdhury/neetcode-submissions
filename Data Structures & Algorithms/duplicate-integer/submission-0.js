class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numsMap = {}
        for(let i=0;i<nums.length;i++){
            if(numsMap[nums[i]]) return true;
            numsMap[nums[i]] =  1;
        }
        return false;
    }
}
