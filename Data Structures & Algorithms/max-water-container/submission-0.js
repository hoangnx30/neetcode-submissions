class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let result = 0
        while (left < right) {
            const size  = Math.min(heights[left], heights[right]) * (right - left)
            result = Math.max(size, result)

            if (heights[left] < heights[right]) {
                left++
            } else {
                right--
            }
        }

        return result
    }
}
