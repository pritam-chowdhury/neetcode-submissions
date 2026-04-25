class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [[]];
        function dfs(i,cur){
            if(i>=nums.length) return;
            cur.push(nums[i]);
            res.push([...cur]);
            dfs(i+1,cur);
            cur.pop();
            dfs(i+1,cur);
        }
        dfs(0,[]);
        return res;
    }
}
