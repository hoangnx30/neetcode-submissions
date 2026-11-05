class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        ans = []

        nums.sort()

        def dfs(start, current_path, total):
            if total == target:
                ans.append(current_path.copy())

            for i in range(start, len(nums)):
                if total + nums[i] > target:
                    return
                
                current_path.append(nums[i])
                dfs(i, current_path, total + nums[i])
                current_path.pop()
            

        dfs(0, [], 0)

        return ans
