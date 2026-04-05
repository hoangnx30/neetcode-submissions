class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0
        let result = 1
        nums = nums.sort((a, b) => a - b)
        console.log(nums)
        for (let i = 0; i < nums.length; i++) {
            let current = nums[i];
            let max = 1
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] == current + 1) {
                    max++
                    current = nums[j]
                }
            }

            result = Math.max(result, max)
        }

        return result
    }
}
