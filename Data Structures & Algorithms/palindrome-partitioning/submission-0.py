class Solution:
    def partition(self, s: str) -> List[List[str]]:
        ans = []
        part = []

        def dfs(start, end):
            if end >= len(s):
                if start == end:
                    ans.append(part.copy())
                return

            if self.isPalidrome(s, start, end):
                part.append(s[start : end + 1])
                dfs(end + 1, end + 1)
                part.pop()

            dfs(start, end + 1)
        
        dfs(0, 0)

        return ans

    def isPalidrome(self, s, l, r):
        print(l, r)
        while l < r:
            if s[l] != s[r]:
                return False
            l, r = l + 1, r - 1

        return True
