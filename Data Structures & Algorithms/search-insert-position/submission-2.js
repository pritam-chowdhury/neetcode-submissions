class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        if(target > nums[nums.length-1]) return nums.length;
        if(target < nums[0]) return 0;
        let left = 0;
        let right = nums.length-1;
        while(left <= right){
            let mid = Math.floor((left+right)/2);
            if(nums[mid] == target) return mid;
            if(target> nums[mid]){
                if(nums[mid] < target && target < nums[mid+1]){
                    return mid + 1;
                }
                left = mid + 1;
            }else {
                if(nums[mid] > target && target > nums[mid-1]){
                    return mid;
                }
                right = mid-1;
            }
        }
        
    }
}
