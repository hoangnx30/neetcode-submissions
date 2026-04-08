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
        if (!root) {
            return []
        }

        const result = []

        while (root) {
            if (!root.left) {
                result.push(root.val)
                root = root.right
            } else {
                let current = root.left
                while (current && current.right && current.right !== root) {
                    current = current.right
                }

                if (!current.right) {
                    result.push(root.val)
                    current.right = root
                    root = root.left
                } else {
                    current.right = null
                    root = root.right
                }

            }
        }

        return result
    }
}
