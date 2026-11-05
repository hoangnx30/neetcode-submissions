class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        ans = []
        candidates.sort()
        print(candidates)

        def dfs(start, current_path, total):
            if total == target:
                ans.append(current_path.copy())
                return

            for i in range(start, len(candidates)):
                if i > start and candidates[i] == candidates[i-1]:
                    continue
                
                if total + candidates[i] > target:
                    break

                current_path.append(candidates[i])
                dfs(i+1, current_path, total + candidates[i])
                current_path.pop()
    

        dfs(0, [], 0)

        return ans
