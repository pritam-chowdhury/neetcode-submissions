class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n =  nums.length;
        k = k % n;
        this.reverse(nums,0,n-1);
        this.reverse(nums,0,k-1);
        this.reverse(nums,k,n-1);
        return nums;
    }

    reverse(nums,start,end){
        while(start< end){
            let t = nums[start];
            nums[start] = nums[end];
            nums[end] = t;
            start++;
            end--;
        }
    }
    
}
