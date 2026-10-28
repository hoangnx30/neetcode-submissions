class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        ans = []
        candidates.sort()

        def dfs(start, current_path, remain):
            if remain == 0:
                ans.append(current_path.copy())
                return

            for i in range(start, len(candidates)):
                num = candidates[i]

                if num > remain:
                    break

                if i > start and candidates[i] == candidates[i - 1]:
                    continue

                current_path.append(num)

                dfs(i + 1, current_path, remain - num)

                current_path.pop()

        dfs(0, [], target)

        return ans
