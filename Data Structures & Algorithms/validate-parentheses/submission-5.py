class Solution:
    def isValid(self, s: str) -> bool:
        dic = {'}': '{', ')': '(', ']': '['}

        stack = []
        stack.append(s[0])

        for i in range(1, len(s)):
            if dic.get(s[i]) and len(stack) and dic.get(s[i]) == stack[-1]:
                stack.pop()
                continue
            else:
                stack.append(s[i])

        return len(stack) == 0    