# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        ans = -100000000

        def dfs(node):
            nonlocal ans
            if not node:
                return 0

            left_max = max(0, dfs(node.left))
            right_max = max(0, dfs(node.right))

            sum_path = node.val + left_max + right_max
            ans = max(ans, sum_path)

            return node.val + max(left_max, right_max)

        dfs(root)
        
        return ans