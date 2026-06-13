class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
 topKFrequent(nums, k) {
    let frqMap = {};
    let frqArr = [];
    let result = [];
    for(let i=0;i<nums.length;i++){
        let c = nums[i];
        frqMap[c] = (frqMap[c] ||0) +1;
    }  
    Object.keys(frqMap).forEach((item)=>{
        if(!frqArr[frqMap[item]]){
            frqArr[frqMap[item]] = [];
        }
        frqArr[frqMap[item]].push(item);
    })
    for(let i=frqArr.length-1;i>=0;i--){
         if(!frqArr[i]) continue;
        for(let j=0;j<frqArr[i].length;j++){
            if(result.length == k) break;
             result.push(frqArr[i][j])
        }  
       
    }
    return result;
}   
}