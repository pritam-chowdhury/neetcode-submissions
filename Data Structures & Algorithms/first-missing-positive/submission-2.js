class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
       for(let i=1;i<=nums.length;i++){
        let notFound = true;
        for(let j=0;j<nums.length;j++){
            if(i== nums[j]) notFound = false;
        }
        if(notFound) return i;
       }
       return nums.length + 1;
    }
    
}
