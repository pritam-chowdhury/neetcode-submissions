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
     * @return {number}
     */
    maxDepth(root) {
        if(root==null) return 0;
        let level = 1;
        let queue = [{node:root, level}];
        while(queue.length){
            let item = queue.pop();
            let node = item.node;
            if(node.left) queue.push({node:node.left, level : item.level+1});
            if(node.right) queue.push({node:node.right, level : item.level+1});
            level = Math.max(level,item.level);
        }
        return level;
    }
}
