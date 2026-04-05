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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (root === null) {
            return null
        }


        if (root.val > key) {
            root.left = this.deleteNode(root.left, key)
        } else if (root.val < key)  {
            root.right = this.deleteNode(root.right, key)
        } else {
            if (root.left === null) {
                return root.right
            } else if (root.right === null) {
                return root.left
            } else {
                const minNode = this.findMinNode(root.right)
                root.val = minNode.val
                root.right = this.deleteNode(root.right, minNode.val)
            }
        }

        return root
    }

    findMinNode(root) {
        let current = root
        while (current && current.left) {
            current = current.left
        }

        return current
    }
}
