class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let colorMap = {};
        let result = [];
        nums.forEach((num)=>{
            colorMap[num] = (colorMap[num] || 0) + 1;
        })
            let index = 0;
            while(colorMap[0]>0){
                nums[index++] = 0;
                colorMap[0]--;
            }
            while(colorMap[1]>0){
                nums[index++] = 1;
                colorMap[1]--;
            }
            while(colorMap[2]>0){
                nums[index++] = 2;
                colorMap[2]--;
            }
    }
}
