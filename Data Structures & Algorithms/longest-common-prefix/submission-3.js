class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
       let res = "";
       for(let i=0;i<strs[0].length;i++){
        for(let j=1;j<strs.length;j++){
            if(strs[0][i] !== strs[j][i]) return res;
        }
        res += strs[0][i];
       }
       return strs[0];
    }
}
