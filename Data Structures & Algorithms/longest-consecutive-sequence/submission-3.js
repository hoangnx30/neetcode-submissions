class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0
        const checked = new Map()

        for (const num of nums) {
            checked.set(num, false)
        }
        let result = 1;

        for (const num of nums) {
            let current = num
            let existed = checked.has(current) && checked.get(current) === false
            if (!existed) continue
            checked.set(current, true)
            let max = 1
            while (existed) {
                existed = checked.has(current + 1)
                if (existed) {
                    checked.set(current + 1, true)
                    current = current + 1
                    max++
                }
            }

        

            result = Math.max(max, result)
        }

        return result
    }
}
