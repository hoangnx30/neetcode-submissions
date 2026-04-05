class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;

        const result = Array(n).fill(0)

        for (let i = 0; i < n; i++) {
            let count = 1;
            let j = i + 1
            while (j < n) {
                if (temperatures[i] >= temperatures[j]) {
                    count++
                } else {
                    result[i] = count
                    break
                }
                j++
            }
        }

        return result
    }
}
