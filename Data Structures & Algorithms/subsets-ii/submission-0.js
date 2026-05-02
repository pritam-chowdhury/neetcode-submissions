class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let subset =  new Set();
        let res = [];

        function dfs(i,curr){
            if(i== nums.length){
                curr.sort();
                if(!subset.has(curr.sort().join())){
                    subset.add(curr.sort().join())
                    res.push([...curr]);
                }
                return;
            }
            curr.push(nums[i]);
            dfs(i+1,[...curr]);
            curr.pop();
            dfs(i+1,[...curr])
        }
        dfs(0,[]);
        return res;
    }
}
