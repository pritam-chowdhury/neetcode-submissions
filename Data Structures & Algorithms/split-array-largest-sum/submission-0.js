class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {

        var canSplit = function(largest){
            let currsum = 0;
            let subarray = 1;
            for(let num of nums){
                currsum += num;
                if(currsum>largest){
                    subarray++;
                    if(subarray > k) return false;
                    currsum = num;
                }
            }
            return true;
        }
        let left = Math.max(...nums);
        let right =  nums.reduce((a, b) => a + b, 0);
        let res = right;
        while(left<= right){
            let mid = Math.floor(left + (right - left) / 2);
            if(canSplit(mid)){
                res = mid;
                right = mid-1;
            }else{
                left =  mid+1
            }
        }
        return res;
    }
}
