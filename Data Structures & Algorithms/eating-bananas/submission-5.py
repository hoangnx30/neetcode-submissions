class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        max_pile = max(piles)
        l, r = 1, max_pile
        ans = 1000000000000000000
        while l <= r:
            m = l + ((r - l) // 2)

            total_time = 0
            for pile in piles:
                total_time += math.ceil(pile / m)

            if total_time <= h:
                ans = min(ans, m)
                r = m - 1
            else: 
                l = m + 1

        return ans
