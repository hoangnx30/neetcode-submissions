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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        if (!root) return false

        const stack = [[root, targetSum - root.val]]

        while (stack.length > 0) {
            console.log(stack)
            const [node, currentSum] = stack.pop()


            if (!node.left && !node.right && currentSum === 0) {
                return true
            }


            if (node.left) {
                stack.push([node.left, currentSum - node.left.val])
            }

            if (node.right) {
                stack.push([node.right, currentSum - node.right.val])
            }


        }

        return false
    }
}
