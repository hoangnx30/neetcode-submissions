class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        ans = []

        def dfs(start, current_path, seen):
            print(current_path)
            if len(current_path) == len(nums):
                ans.append(current_path.copy())
                return

            for i in range(len(nums)):
                if not seen[i]:
                    num = nums[i]
                    current_path.append(num)
                    seen[i] = True

                    dfs(i, current_path, seen)

                    current_path.pop()
                    seen[i] = False

        dfs(0, [], [False] * len(nums))

        return ans
