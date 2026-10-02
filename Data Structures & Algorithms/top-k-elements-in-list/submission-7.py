from collections import defaultdict


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        d = defaultdict(int)

        for num in nums:
            d[num] = d[num] + 1

        arr = []
        for num, count in d.items():
            arr.append([num, count])

        arr.sort(key=lambda x: x[1])

        res = []
        while len(res) < k:
            res.append(arr.pop()[0])

        return res
