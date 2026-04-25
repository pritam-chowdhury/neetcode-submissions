class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = [];
        function dfs(i,cur){
            if(i>n) return;
            if(cur.length > k) return
            cur.push(i);
            if(cur.length == k)
            res.push([...cur]);
            dfs(i+1,cur);
            cur.pop();
            dfs(i+1,cur);
        }
        dfs(1,[]);
        return res;
    }
}
