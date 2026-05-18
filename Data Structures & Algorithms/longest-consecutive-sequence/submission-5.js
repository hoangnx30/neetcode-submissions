class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let result = 0;

        console.log(set);

        for (let num of nums) {
            if (!set.has(num - 1)) {
                let length = 1;
                while (set.has(num + length)) {
                    length++;
                }

                result = Math.max(result, length)
            }
        }

        return result;
    }
}
