class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let charMap = {};
        for(let i=0;i<strs.length;i++){
            let sorted = strs[i].split("").sort().join("");
            if(!charMap[sorted]){
                charMap[sorted] = [];
            }
            charMap[sorted].push(strs[i]);
        }
        return Object.values(charMap);
    }
    
}
