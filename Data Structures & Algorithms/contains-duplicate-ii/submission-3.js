class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let i = 0;
        let numberSet = new Set();
        for(let j=0;j<nums.length;j++){
            if(j-i> k){
                numberSet.delete(nums[i]);
                i++;
                
            }
            if(numberSet.has(nums[j]))
                return true;
            else 
                numberSet.add(nums[j])
            
        }

        return false;
        
    }
}
