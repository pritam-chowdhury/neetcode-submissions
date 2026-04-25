class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {};
        let i = 0;
        let j =0;
        let res = 0;
        while(j<s.length){
            if(!map[s[j]]) map[s[j]] = 0;
            map[s[j]] = map[s[j]] + 1;
            let window = j-i+1;
            let maxf = Math.max(...Object.values(map));
            if(window - maxf <=k){
                res = Math.max(res,window)
                j++;
            }else{
                map[s[i]] = map[s[i]] - 1;
                i++;
                j++;
            }
        }
        return res;
    }
   
}
