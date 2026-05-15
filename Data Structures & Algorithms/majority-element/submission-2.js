class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let result = 0;

        for (const num of nums) {
            if (count === 0) {
                result = num
            }
            count += num === result ? 1 : -1
        }

        return result
    }
}
