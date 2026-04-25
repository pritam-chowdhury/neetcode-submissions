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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        let queue = [root];
        let result = [];
        while(queue.length){
            //let node = queue.pop();
            let temp = queue.splice(0)
            let data = [];
            for(let i=0;i<temp.length;i++){
                let node = temp[i];
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
                data.push(node.val);
            }
            result.push(data);
        }
        return result;
    }
}
