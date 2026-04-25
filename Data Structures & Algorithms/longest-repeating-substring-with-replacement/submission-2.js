class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0;
        let r =0;
        let result = -Infinity;
        let charMap = {};
        while(r<s.length){
            charMap[s[r]] = (charMap[s[r]] || 0) + 1;
            while((r-l+1) - this.findMostFrequent(charMap)> k){
                 charMap[s[l]]--;
                 l++; 
            }
            result = Math.max(r-l+1, result);
            r++;
        }
        return result;
    }
    findMostFrequent(map){
        let key = "";
        Object.keys(map).forEach((item)=>{
            if(!key) key = item;
            else if(map[item] > map[key]){
                key = item;
            }
        })
        return map[key];
    }
}
