# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0 

        max_left = self.get_height(root.left)
        max_right = self.get_height(root.right)

        diameter = max_left + max_right
        sub = max(self.diameterOfBinaryTree(root.left), self.diameterOfBinaryTree(root.right))

        return max(diameter, sub)



    def get_height(self, root: Optional[TreeNode]) -> int:
        if not root: 
            return 0
        return 1 + max(self.get_height(root.left), self.get_height(root.right))
        