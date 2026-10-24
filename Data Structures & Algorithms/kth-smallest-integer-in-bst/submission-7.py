# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        arr = self.smallestHelper(root, [])
        return arr[k-1]
    
    def smallestHelper(self, root, tree):
        if not root:
            return tree
        self.smallestHelper(root.left, tree)
        tree.append(root.val)
        self.smallestHelper(root.right, tree)

        return tree