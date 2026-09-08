class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let result = 0

        const map = {}

        for(const num of nums) {
            if (!map[num]) {
                map[num]= 0
            }
            map[num]++
            if (map[num] > nums.length / 2) {
                result = num
            }
        }

        return result
    }
}
