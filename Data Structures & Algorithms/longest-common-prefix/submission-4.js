class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
      let i;
      let valid = true;
      for(i=0;i<strs[0].length;i++){
        for(let j=1;j<strs.length;j++){
            if(strs[0][i] != strs[j][i]){
                valid = false;
                break;
            }
        }
        if(!valid){
            break;
        }
      }
      return strs[0].substring(0,i);
    }
}
