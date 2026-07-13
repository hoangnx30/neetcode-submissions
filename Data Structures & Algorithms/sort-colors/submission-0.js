class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const nestedResult = [[], [], []];

        for (const num of nums) {
            nestedResult[num].push(num);
        }

        let i = 0
        for (const subArr of nestedResult) {
            for (const num of subArr) {
                nums[i] = num
                i++
            }
        }

  
    }
}
