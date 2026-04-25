class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(!s.length) return 0;
       let strSet = new Set();
       let i=0;
       let j =0;
       let max = -Infinity;
       while(j<s.length){
        if(strSet.has(s[j])){
            while(strSet.has(s[j])){
            strSet.delete(s[i]);
            i++;
        }
        }
         max = Math.max(max,j-i+1);
        strSet.add(s[j]);
        j++;
       }
       return max;
    }
}
