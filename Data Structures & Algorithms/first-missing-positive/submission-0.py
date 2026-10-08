class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        missing = 1
        while True:
            flag = False
            for num in nums:
                if num == missing:
                    flag = True
                    break
            
            if not flag:
                return missing
            
            missing += 1

        