class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let result = -Infinity;
    let l = 0;
    let r = heights.length-1;
    while(l<r){
        const tempResult = (r-l) * Math.min(heights[l],heights[r]);
        result = Math.max(result,tempResult);
        if(heights[l]>heights[r]) r--;
        else l++;
    }
    return result
    }
    
}
