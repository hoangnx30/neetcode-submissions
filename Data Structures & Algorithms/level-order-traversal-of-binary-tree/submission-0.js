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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) {
            return []
        }
        let queue = []
        const result = []

        queue.push(root)

        let tempQueue = []
        let tempResult = []

        while (queue.length > 0) {
            const node = queue.pop()

            tempResult.push(node.val)

            if (node.left) {
                tempQueue.unshift(node.left)
            }

            if (node.right) {
                tempQueue.unshift(node.right)
            }





            if (queue.length === 0) {
                queue = tempQueue
                result.push(tempResult)
                tempQueue = []
                tempResult = []
            }
        }

        return result
    }
}
