class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rowCount = board.length;
        let colCount = board[0].length;
        let visited =  new Set();

        function dfs(row,col,index){
             if(index==word.length) return true;
            if(row<0 || row>=rowCount || col<0 || col>=colCount
             || visited.has(`${row},${col}`)
             || word[index] !== board[row][col]){
                return false;
            }
            visited.add(`${row},${col}`)
           
            const res = dfs(row,col-1,index+1) || dfs(row,col+1,index+1) 
                || dfs(row+1,col,index+1)
                || dfs(row-1,col,index+1);
            visited.delete(`${row},${col}`);
            return res;
            
        }
        for(let i=0;i<rowCount;i++){
            for(let j=0;j<colCount; j++){
                if (dfs(i,j,0)) return true;
            }
        }
        return false;
    }
}
