class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let numsMap = {};
        for(let i=0;i<nums.length;i++){
            let c = nums[i];
            numsMap[c] = (numsMap[c] || 0) + 1;
        }
        let c = 0;
        Object.keys(numsMap).forEach((item,i)=>{
            while(numsMap[item]>0){
                nums[c] = item;
                numsMap[item]--;
                c++;
            }
        });
        return nums;
    }
}
