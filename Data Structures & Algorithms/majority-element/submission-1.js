class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();
        let answer = nums[0];
        for (const num of nums) {
            if (!map.has(num)) {
                map.set(num, 1);
            } else {
                const count = map.get(num);
                map.set(num, count + 1);
                const max = map.get(answer) || 0;
                answer = count > max ? num : answer;
            }
        }

        return answer;
    }
}
