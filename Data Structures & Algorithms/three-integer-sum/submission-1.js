class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = []
        nums = nums.sort((a, b) => a - b)

        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            const num1 = nums[i]

            let left = i + 1
            let right = nums.length - 1

            while (left < right) {
                const sum = num1 + nums[left] + nums[right]

                if (sum === 0) {
                    result.push([num1, nums[left], nums[right]])
                    while (left < right && nums[left] === nums[left + 1]) left++
                    while (left < right && nums[right] === nums[right - 1]) right--
                    left++
                    right--
                }

                if (sum < 0) left++
                if (sum > 0) right--

            }

        }
        return result
    }
}
