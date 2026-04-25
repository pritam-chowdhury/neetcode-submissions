class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {};
        //strs.forEach((str)=> str.split("").sort().join(""));
        for(let s of strs){
            let sorted= s.split("").sort().join("")
            if(!obj[sorted]){
                obj[sorted] = [];
            }
            obj[sorted].push(s)
        }
        return Object.values(obj);
    }
    
}
