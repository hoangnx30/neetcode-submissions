class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        r = [0] * n

        for i in range(n - 2, -1, -1):
            j = i + 1
            while j < n:
                if temperatures[j] > temperatures[i]:
                    r[i] = j - i
                    break
                elif r[j] == 0:
                    r[i] = 0
                    break
                else:
                    j += r[j]

        return r
