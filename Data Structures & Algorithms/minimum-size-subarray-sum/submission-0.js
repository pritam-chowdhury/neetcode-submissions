class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let res = Infinity;
        for(let i=0;i<nums.length;i++){
            let sum =0;
            for(let j=i;j<nums.length;j++){
                sum += nums[j];
                if(sum>= target){
                    res = Math.min(res, (j-i)+1)
                }
            }
        }
        return res === Infinity ?  0 : res;

    }
}
