class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let seen = new Set();
        let i=0;
        let j = 0;
        let result = 0;
        while(j<s.length){
            if(!seen.has(s[j])){
                seen.add(s[j]);
            }else{
                while(seen.has(s[j])){
                    seen.delete(s[i]);
                    i++;
                }
                seen.add(s[j]);
            }
            result = Math.max(result,j-i+1);
            j++;
        }
        return result;
    }
    
}
