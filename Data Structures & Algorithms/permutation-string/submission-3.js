class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length >s2.length) return false;
       let charMapOne = {};
       let charMapTwo = {};
       let charLength =  s1.length;
       let need = 0;
       for(let i=0;i<charLength;i++){
        charMapOne[s1[i]] = (charMapOne[s1[i]] || 0) + 1;
       }
       need = Object.keys(charMapOne).length;
       for(let i=0;i<s2.length;i++){
            charMapTwo = {};
            let has = 0;
            for(let j=i;j<i+charLength;j++){
                charMapTwo[s2[j]] = (charMapTwo[s2[j]] || 0) + 1;
                if(!charMapOne[s2[j]]){
                    charMapTwo = {};
                    break;
                }
            }
            for(let key in charMapTwo){
                if(charMapTwo[key] !== charMapOne[key]) break;
                if(charMapTwo[key] == charMapOne[key] ){
                  has ++;
                }
            }
            if(has==need) return true;
       }
        return false;
    }
}
