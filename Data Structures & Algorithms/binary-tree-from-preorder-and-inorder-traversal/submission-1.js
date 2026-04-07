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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    // buildTree(preorder, inorder) {
    //     if (!preorder.length || !inorder.length) {
    //         return null
    //     }

    //     const root = new TreeNode(preorder[0])

    //     const mid = inorder.indexOf(root.val)

    //     root.left = this.buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    //     root.right = this.buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

    //     return root
    // }

    buildTree(preorder, inorder) {
        const map = new Map()

        inorder.forEach((num, idx) => { map.set(num, idx) })

        let preIdx = 0

        const dfs = (left, right) => {
            if (left > right) return null

            const rootVal = preorder[preIdx]
            const root = new TreeNode(rootVal)

            preIdx++

            const mid = map.get(rootVal)

            root.left = dfs(left, mid - 1)
            root.right = dfs(mid + 1, right)

            return root
        }

        return dfs(0, inorder.length - 1)
    }
}
