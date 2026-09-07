class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const result = []
        for (const num of nums) {
            if (num !== val) {
                result.push(num)
            }
        }

        for (let i = 0; i < nums.length; i++) {
            nums[i] = result[i]
        }

        return result.length
    }
}
