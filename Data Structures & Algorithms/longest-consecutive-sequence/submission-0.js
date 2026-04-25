class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0;
        let numberSet = new Set()
        for(let i=0;i<nums.length;i++){
            numberSet.add(nums[i]);
        }

        for(let i=0;i<nums.length;i++){
            let count = 0;
            let current;
            if(!numberSet.has(nums[i]-1)){
                count = 1;
                current = nums[i];
                while(numberSet.has(current+1)){
                    current = current +1;
                    count++;
                }
            }
            max = Math.max(count, max);
        }
        return max;
    }
}
