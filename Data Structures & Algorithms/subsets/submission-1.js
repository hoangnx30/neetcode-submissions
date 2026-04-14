class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [[]]

        for (const num of nums) {
            const size = result.length
            for (let i = 0; i < size; i++) {
                const subset = result[i].slice()
                subset.push(num)
                result.push(subset)
            }

        }

        return result

    }
}
