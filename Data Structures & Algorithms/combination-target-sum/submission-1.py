class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        ans = []

        def dfs(start, current_path, remain):
            if remain == 0:
                ans.append(current_path.copy())
                return
            if remain < 0:
                return

            for i in range(start, len(nums)):
                if nums[i] > remain:
                    continue
                current_path.append(nums[i])

                dfs(i, current_path, remain - nums[i])

                current_path.pop()

        dfs(0, [], target)

        return ans
