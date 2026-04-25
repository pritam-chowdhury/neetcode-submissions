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
    postorderTraversal(root) {
        if(!root) return [];
        let result = [];
        function postorder(parent){
            if(parent.left) postorder(parent.left);
            if(parent.right) postorder(parent.right);
            result.push(parent.val);
        }
        postorder(root);
        return result;
    }
}
