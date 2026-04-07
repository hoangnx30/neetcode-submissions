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
        const result = []

        let current = root

        while (current) {
            if (!current.left) {
                result.push(current.val)
                current = current.right
            } else {

                let pre = current.left


                while (pre && pre.right && pre.right !== current) {
                    pre = pre.right
                }

                if (!pre.right) {
                    pre.right = current
                    current = current.left
                } else {
                    pre.right = null
                    result.push(current.val)
                    current = current.right
                }
            }

        }

        return result
    }

}
