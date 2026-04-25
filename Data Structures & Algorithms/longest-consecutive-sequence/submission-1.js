class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       let set = new Set();
       let result = 0;
       for(let i=0;i<nums.length;i++){
        set.add(nums[i]);
       }
       for(let i=0;i<nums.length;i++){
        let counter = 0;
        if(!set.has(nums[i]-1)){
            let startLoop = nums[i];
            while(set.has(startLoop)){
                startLoop++;
                counter ++;
            }   
        }
        result = Math.max(result,counter);
       }
       return result;
    }
}
