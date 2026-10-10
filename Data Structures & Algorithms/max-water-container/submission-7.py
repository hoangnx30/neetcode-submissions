class Solution:
    def maxArea(self, heights: List[int]) -> int:
        re, l, r = 0, 0, len(heights) - 1

        while l < r:
            re = max(re, (r - l) * min(heights[l], heights[r]))

            if heights[l] > heights[r]:
                r -= 1
            elif heights[l] < heights[r]:
                l += 1
            else:
                l += 1
                r -= 1

        return re
