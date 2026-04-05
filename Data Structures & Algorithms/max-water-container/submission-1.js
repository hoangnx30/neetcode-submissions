class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let result = 0

        for (let i = 0; i < heights.length - 1; i++) {
            for (let j = i; j < heights.length; j++) {
                const sum = Math.min(heights[i], heights[j]) * (j - i);
                result = Math.max(sum, result)
            }
        }

       return result
    }
}
