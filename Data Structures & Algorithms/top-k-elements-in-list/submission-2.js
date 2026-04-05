class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const check = {}
        for (const num of nums) {
            if (!check[num]) check[num] = 1
            else check[num]++
        }
        let count = []

        for (const [key, value] of Object.entries(check)) {
            count.push({ key, value })
        }

        count = count.sort((a, b) => b.value - a.value)

        return count.slice(0, k).map(r => r.key);
    }
}
