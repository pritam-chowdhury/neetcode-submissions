class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let obj = {};
        let frequencyArr = [];
        let result = [];
        for(let i=0;i<nums.length;i++){
            if(!obj.hasOwnProperty(nums[i])){
                obj[nums[i]] = 0;
            }
            obj[nums[i]] = obj[nums[i]]+1;
        }
        Object.keys(obj).forEach((item)=>{
            if(!frequencyArr[obj[item]]) frequencyArr[obj[item]]  = [];
            frequencyArr[obj[item]].push(item);
        })

        for (let i = frequencyArr.length - 1; i >= 0 && result.length < k; i--) {
    if (frequencyArr[i]) result.push(...frequencyArr[i]);
  }
        return result;
    
}
}
