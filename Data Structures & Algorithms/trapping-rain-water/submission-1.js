class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;

        if (n === 0) return 0

        const maxLeft = Array(n).fill(0)
        const maxRight = Array(n).fill(0)

        let result = 0
        maxLeft[0] = height[0]
        for (let i = 1; i < n; i++) {
            maxLeft[i] = Math.max(height[i], maxLeft[i - 1])
        }

        maxRight[n - 1] = height[n - 1]
        for (let i = n - 2; i >= 0; i--) {
            maxRight[i] = Math.max(height[i], maxRight[i + 1])
        }

        for (let i = 0; i < n; i++) {
            result += Math.min(maxLeft[i], maxRight[i]) - height[i]
        }

        return result
    }
}
