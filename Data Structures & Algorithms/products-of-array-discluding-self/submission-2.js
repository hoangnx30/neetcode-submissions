class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums) {
        let t = 1;
        let zeroCount = 0
        for (const num of nums) {
            if (num ===0 ) {
                zeroCount++
                continue
            }
            t = t * num
        }

        if (zeroCount > 1) {

            return Array(nums.length).fill(0)
        }

        const result = []

        for (const num of nums) {
            if (zeroCount > 0) {
                if (num !== 0) {
                    result.push(0)
                } else {
                    result.push(t)
                }
            } else {
                result.push(t / num)
            }
        }

        return result;
    }
}
