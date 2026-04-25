/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        let queue = [root];
        let result = [];
        while(queue.length){
            let tempQ = queue.splice(0);
            for(let i=0;i<tempQ.length;i++){
                if(i==tempQ.length-1){
                    result.push(tempQ[i].val);
                }
                if(tempQ[i].left) queue.push(tempQ[i].left);
                if(tempQ[i].right) queue.push(tempQ[i].right);
            }
        }
        return result;
    }
}
