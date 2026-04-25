class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let strMap = {};
        for(let i=0;i<strs.length;i++){
            let sorted =  strs[i].split("").sort().join();
            if(!strMap[sorted]){
                strMap[sorted] = [strs[i]];
            }else{
                strMap[sorted].push(strs[i]);
            }
        }
        return Object.values(strMap);
    }
    
}
