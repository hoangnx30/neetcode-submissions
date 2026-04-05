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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true

        const leftDepth = this.getDepth(root.left)
        const rightDepth = this.getDepth(root.right)
        if (Math.abs(leftDepth - rightDepth) > 1) return false
        return this.isBalanced(root.left) && this.isBalanced(root.right)
    }

    getDepth(root) {
        if (!root) {
            return 0
        }

        return 1 + Math.max(this.getDepth(root.left), this.getDepth(root.right))


    }
}
