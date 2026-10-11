class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        r = [0] * n
        stack = []

        for i, t in enumerate(temperatures):
            while stack and t > stack[-1][0]:
                s_t, s_i = stack.pop()
                r[s_i] = i - s_i
            stack.append([t, i])

        return r
