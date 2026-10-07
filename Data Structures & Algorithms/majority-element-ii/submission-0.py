class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        count = {}
        res = []

        for num in nums:
            count[num] = count.get(num, 0) + 1

        for num in count:
            if count[num] > len(nums) // 3:
                res.append(num)

        return res
        