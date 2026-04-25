class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    backtrack(open,closed,n,res,stack){
        if(open==closed && open==n){
            res.push(stack);
            return;
        }
        if(open<n){
            this.backtrack(open+1, closed, n,res,stack+"(");
        }
        if(closed<open){
            this.backtrack(open, closed+1, n,res,stack+")");
        }
    }
    generateParenthesis(n) {
        let res = [];
        this.backtrack(0,0,n,res,"");
        return res;
    }
}
