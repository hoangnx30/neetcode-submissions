class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0,
            right = heights.length - 1;

        let result = 0;

        while (left < right) {
            const minHeight = Math.min(heights[left], heights[right]);
            const width = right - left;

            result = Math.max(result, minHeight * width);

            if (heights[left] < heights[right]) {
                left++;
            } else if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
                right--;
            }
        }

        return result;
    }
}
