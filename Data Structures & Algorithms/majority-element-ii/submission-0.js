class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let numberMap = {};
        let result = new Set();
        for(let i=0;i<nums.length;i++){
            numberMap[nums[i]] = (numberMap[nums[i]] || 0) + 1;
            if(numberMap[nums[i]] > Math.floor(nums.length/3)){
                result.add(nums[i])
            }
        }
        return [...result];
    }
    
}
