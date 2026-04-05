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
        const temp = new Int32Array(2)
        temp[0] = k
        this.dfs(root, temp)

        return temp[1]

    }


    dfs(root, temp) {
        if (!root) return

        this.dfs(root.left, temp)
        temp[0]--
        if (temp[0] === 0) {
            temp[1] = root.val
            return
        }
        this.dfs(root.right, temp)
    }
}
