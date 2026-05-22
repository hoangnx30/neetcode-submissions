class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0;
        for (let i = 0; i < heights.length - 1; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                const width = j - i;
                const height = Math.min(heights[i], heights[j]);

                result = Math.max(result, height * width);
            }
        }

        return result
    }
}
