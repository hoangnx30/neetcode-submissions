class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        m = {}
        if len(s) != len(t):
            return False
        
        for i in range (0, len(s)):
            m[s[i]] = 1 + m.get(s[i], 0)
            m[t[i]] = m.get(t[i], 0) - 1

        for key in m:
            if m[key] != 0:
                return False

        return True
        