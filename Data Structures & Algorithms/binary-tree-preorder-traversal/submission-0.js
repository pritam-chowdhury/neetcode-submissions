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
    preorderTraversal(root) {
        if(!root) return [];
        let result = [];
        function preorder(parent){
            result.push(parent.val);
            if(parent.left) preorder(parent.left);
            if(parent.right) preorder(parent.right);
        }
        preorder(root)
        return result;
    }
}
