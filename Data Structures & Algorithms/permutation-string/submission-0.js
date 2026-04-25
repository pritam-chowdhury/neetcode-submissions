class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let charMapone = {};
        for(let i=0;i<s1.length;i++){
            charMapone[s1[i]] = (charMapone[s1[i]] || 0) + 1;
        }
        let need = Object.keys(charMapone).length;
        for(let i=0;i<s2.length;i++){
            let charMapTwo = {};
            let cur = 0;

            for(let j=i;j<i+s1.length;j++){
                let c = s2[j];
                charMapTwo[c] = (charMapTwo[c] || 0) + 1
                if(charMapone[c] ==0 || (charMapTwo[c] > charMapone[c])) {
                    break;
                }
                if(charMapTwo[c] == charMapone[c]){
                    cur++;
                }
                if(cur == need){
                    return true;
                }
            }
        }
        return false;
    }
}
