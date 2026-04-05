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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        if (!root) {
            return new TreeNode(val)
        }

        let current = root
        while (true) {
            
            if (val > current.val) {
                if (!current.right) {
                    current.right = new TreeNode(val)
                    return root
                }
                current = current.right
            } else {
                if (!current.left) {
                    current.left = new TreeNode(val)
                    return root
                }
                current = current.left
            }
        }
    }
}
