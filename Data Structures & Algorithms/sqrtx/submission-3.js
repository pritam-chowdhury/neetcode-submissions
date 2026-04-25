class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let left = 0;
        let right =x;
        let result = 0
        while(left<=right){
            let m = Math.floor((left+right)/2);
            if(m*m == x) return m;
            if(m*m>x) {
                right = m -1;
            }
            else if(m*m<x) {
                left = m +1;
                result = m
            }
        }
        return result;
    }
}
