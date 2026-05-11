class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let count = 0;
        for (const num of nums) {
            if (num === 1) {
                count++;
            } else {
                max = Math.max(count, max)
                count = 0
            }
        }

        return Math.max(count, max)
    }
}
