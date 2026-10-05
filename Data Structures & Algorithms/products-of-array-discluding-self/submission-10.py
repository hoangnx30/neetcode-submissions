class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        left_prefix = [1] * len(nums)
        right_prefix = [1] * len(nums)

        for i in range(1, len(nums)):
            left_prefix[i] = nums[i-1] * left_prefix[i-1]

        for i in range(len(nums)-2, -1, -1):
            right_prefix[i] = nums[i+1] * right_prefix[i+1]
        
        res = [0] * len(nums)
        for i in range(len(nums)):
            res[i] = left_prefix[i] * right_prefix[i]

        return res

        