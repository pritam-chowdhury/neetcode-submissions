class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = -Infinity;
        for(let i=0;i<heights.length;i++){
            for(let j=i+1;j<heights.length;j++){
                let minH = Math.min(heights[i], heights[j]);
                let area = minH * (j-i);
                result = Math.max(result,area);
            }
        }
        return result;
    }
    
}
