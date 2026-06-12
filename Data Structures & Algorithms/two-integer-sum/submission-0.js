class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let charMap = {};
        charMap[nums[0]] = 0;
        for(let i=1;i<nums.length;i++){
            let c = nums[i];
            let rem = target - c;
            if(charMap[rem] != undefined){
                return [charMap[rem],i];
            }
            charMap[c] = i;
        }
    }
}
