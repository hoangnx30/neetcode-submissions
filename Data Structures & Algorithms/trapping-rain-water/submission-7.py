class Solution:
    def trap(self, height: List[int]) -> int:
        r, n = 0, len(height)

        left_maxs = [0] * n
        right_maxs = [0] * n

        left_maxs[0] = height[0]
        for i in range(1, n):
            left_maxs[i] = max(left_maxs[i - 1], height[i])

        right_maxs[n-1] = height[n-1]
        for i in range(n - 2, -1, -1):
            right_maxs[i] = max(right_maxs[i + 1], height[i])

        for i in range(n):
            r += min(left_maxs[i], right_maxs[i]) - height[i]

        return r
