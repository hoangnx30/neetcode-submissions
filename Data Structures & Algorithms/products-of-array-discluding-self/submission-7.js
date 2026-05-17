class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let hasZero = false;
        let all = 1;
        let numOfZeroes = 0;

        for (const num of nums) {
            if (num === 0) {
                hasZero = true;
                numOfZeroes++;
            } else {
                all *= num;
            }
        }

        if (numOfZeroes > 1) return new Array(nums.length).fill(0);

        const result = [];

        for (let i = 0; i < nums.length; i++) {
            if (hasZero) {
                if (nums[i] === 0) {
                    result.push(all);
                } else {
                    result.push(0);
                }
            } else {
                result.push(all / nums[i]);
            }
        }

        return result;
    }
}
