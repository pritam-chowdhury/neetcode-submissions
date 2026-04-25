class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let numsMap = {};
        let result = [];
        for(let i=0;i<nums.length;i++){
            numsMap[nums[i]] = ( numsMap[nums[i]] || 0) + 1;
        }
        let index = 0;
        Object.keys(numsMap).forEach((item)=>{
            while(numsMap[item] > 0){
                nums[index] = item;
                numsMap[item] --;
                index++;
            }
        })
    }
}
