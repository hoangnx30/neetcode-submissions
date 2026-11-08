class Solution:
    def climbStairs(self, n: int) -> int:
        ans = [0, 1, 2]
        if n <= 2:
            return ans[n]

        for i in range(3, n + 1):
            ans.append(ans[i - 1] + ans[i - 2])

        return ans[n]
