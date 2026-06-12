class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let charMap = {};
        let charMapOne = {};
        for(let i=0;i<s.length;i++){
            let c = s[i];
            charMap[c] = (charMap[c] ||0) +1
        }
        for(let j=0;j<t.length;j++){
            let c = t[j];
            if(!charMap[c]){
                return false;
            }
            charMapOne[c] = (charMapOne[c] ||0) +1;
            if(charMapOne[c] > charMap[c]){
                return false;
            }
        }
        return true;
    }
}
