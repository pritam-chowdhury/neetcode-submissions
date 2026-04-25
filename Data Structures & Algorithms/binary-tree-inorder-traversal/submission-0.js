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
    inorderTraversal(root) {
        if(!root) return [];
        let result = [];
        function inorder(parent){
            if(parent.left) inorder(parent.left);
            result.push(parent.val);
            if(parent.right) inorder(parent.right);
        }
        inorder(root)
        return result;
    }
}
