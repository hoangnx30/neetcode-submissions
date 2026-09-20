class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        dic = {}
        for num in nums:
            c = str(num)
            if c not in dic:
                dic[c] = 1
            else:
                dic[c] = dic[c] + 1
                return True
        
        return False

        