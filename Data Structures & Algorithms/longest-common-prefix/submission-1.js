class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = "";
        for(let i=0;i<strs[0].length;i++){
            for(let j=0;j<strs.length;j++){
                if(strs[0][i] != strs[j][i]){
                    result = strs[0].slice(0,i);
                    return result;
                }
            }
            
        }
        return strs[0];
    }
}
