class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums) {
        const n = nums.length
        const prefixs = new Array(n)
        const suffixs = new Array(n)
        const result = []

        prefixs[0] = 1
        suffixs[n - 1] = 1
        for (let i = 1; i < n; i++) {
            prefixs[i] = prefixs[i - 1] * nums[i - 1]
        }

        for (let i = n - 2; i >= 0; i--) {
               suffixs[i] = suffixs[i + 1] * nums[i + 1]
        }

        for (let i = 0; i < n; i++) {
            result.push(prefixs[i] * suffixs[i])
        }

        return result
    }
}
