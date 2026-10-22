# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:

        if not root:
            return []

        q = deque([root])

        ans = []

        while q:
            rightest_node = None
            q_len = len(q)

            for i in range(q_len):
                node = q.popleft()

                if node:
                    rightest_node = node
                    q.append(node.left)
                    q.append(node.right)

            if rightest_node:
                ans.append(rightest_node.val)

        return ans
