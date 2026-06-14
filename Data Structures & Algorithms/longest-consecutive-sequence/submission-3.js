class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numset = new Set();
        let maxcount = 0;
        let current;
        for(let i=0;i<nums.length;i++){
            numset.add(nums[i]);
        }
        for(let i=0;i<nums.length;i++){
            let count = 0;
            if(!numset.has(nums[i]-1)){
                count++;
                current =  nums[i]
                while(numset.has(current+1)){
                    current = current+1
                    count++;
                }
             maxcount = Math.max(maxcount,count);
            }
        }
        return maxcount;
    }
    
}
