class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let i=0;
        let j = nums.length -1;
        k = k % nums.length;
        while(i<j){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
        let a=0;
        let b = k-1;
        while(a<b){
            let temp = nums[a];
            nums[a] = nums[b];
            nums[b] = temp;
            a++;
            b--;
        }

        let m=k;
        let n = nums.length -1;
        while(m<n){
            let temp = nums[m];
            nums[m] = nums[n];
            nums[n] = temp;
            m++;
            n--;
        }
    }
}
