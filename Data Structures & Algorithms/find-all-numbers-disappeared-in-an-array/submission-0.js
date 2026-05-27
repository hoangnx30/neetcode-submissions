class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const check = new Set(nums)
        const result = []
        for (let i = 1; i <= nums.length; i++) {
            const num = i
            if (!check.has(num)) {
                result.push(num)
            }
        }

        return result
    }
}
