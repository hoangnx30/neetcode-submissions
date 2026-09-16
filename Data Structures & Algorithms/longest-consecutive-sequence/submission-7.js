class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let result = 0;
        const set = new Set(nums);

        for (const num of nums) {
            let streak = 0;
            while (!set.has(num - 1)) {
                if (set.has(num + streak)) {
                    ++streak;
                } else {
                    break;
                }
            }

            result = Math.max(result, streak);
        }

        return result;
    }
}
