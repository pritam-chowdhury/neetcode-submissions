class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let numsMap = {};
        for(let i=0;i<nums.length;i++){
            let c= nums[i];
            numsMap[c] = (numsMap[c] ||0) +1;
            if(numsMap[c] >= nums.length /2) return c;
        }
    }
}
