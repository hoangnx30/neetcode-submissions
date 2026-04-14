class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = []
        const subset = []

        this.dfs(0, result, subset, nums)

        return result
    }

    dfs(idx, result, subset, nums) {
        if (idx >= nums.length) {
            result.push([...subset])
            return
        }
        subset.push(nums[idx])
        this.dfs(idx + 1, result, subset, nums)

        subset.pop();
        this.dfs(idx + 1, result, subset, nums)
    }
}
