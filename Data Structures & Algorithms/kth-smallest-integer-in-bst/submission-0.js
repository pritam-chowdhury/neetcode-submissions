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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let result = [];
        function inorder(node){ 
            if(node == null) return;
            if(node.left) inorder(node.left);
            result.push(node.val);
            if(node.right) inorder(node.right);
        }
        inorder(root)

        return result[k-1];
    }
}
