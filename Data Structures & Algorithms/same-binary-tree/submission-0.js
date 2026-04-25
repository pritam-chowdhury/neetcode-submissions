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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
isSameTree(p, q) {
    // minimal correction for null cases
    if (!p && !q) return true;
    if (!p || !q) return false;

    let q1 = [p];
    let q2 = [q];
    let result = [];
    let result1 = [];

    while (q1.length) {
        let node = q1.pop();
        if (node) {
            result.push(node.val);
            q1.push(node.left);
            q1.push(node.right);
        } else {
            result.push(null);
        }
    }

    while (q2.length) {
        let node = q2.pop();
        if (node) {
            result1.push(node.val);
            q2.push(node.left);
            q2.push(node.right);
        } else {
            result1.push(null);
        }
    }

    if (result.length !== result1.length) return false;

    for (let i = 0; i < result.length; i++) {
        if (result[i] !== result1[i]) return false;
    }

    return true;
}

}
