class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = -Infinity;
        let i=0;
        let j = heights.length -1;
        while(i<j){
            let minH = Math.min(heights[i],heights[j]);
            let area = minH * (j-i);
            result = Math.max(result,area);
            if(heights[i] <= heights[j]){
                i++;
            }else{
                j--;
            }
        }
        return result;
    }
    
}
