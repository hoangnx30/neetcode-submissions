class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;

        const result = Array(n).fill(0)

        const stack = []

        for (let i = 0; i < n; i++) {


            while (stack.length > 0 && temperatures[i] > stack[stack.length - 1].t) {
                const { t, idx } = stack.pop()

                result[idx] = i - idx

            }
            stack.push({ t: temperatures[i], idx: i })
        }

        return result
    }
}
