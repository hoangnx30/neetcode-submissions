class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        ans = []
        def dfs(start, current_path):
            ans.append(current_path.copy())

            for i in range(start, len(nums)):
                current_path.append(nums[i])

                dfs(i + 1, current_path)

                current_path.pop()

        
        dfs(0, [])

        return ans

        