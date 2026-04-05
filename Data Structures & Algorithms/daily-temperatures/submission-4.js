class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;

        const result = Array(n).fill(0)

        for (let i = n - 2; i >= 0; i--) {
            let j = i + 1

            while (j < n && temperatures[i] >= temperatures[j]) {
                if (result[j] == 0) {
                    j = n
                    break
                }
                j += result[j]

            }

            if (j < n) {
                result[i] = j - i

            }
        }

        return result
    }
}
