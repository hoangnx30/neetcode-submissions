class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        ans = []
        dc = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "qprs",
            "8": "tuv",
            "9": "wxyz",
        }

        def backtrack(i, current):
            if len(current) == len(digits):
                ans.append(current)
                return

            for ch in dc[digits[i]]:
                backtrack(i + 1, current + ch)

        if digits:
            backtrack(0, '')

        return ans
