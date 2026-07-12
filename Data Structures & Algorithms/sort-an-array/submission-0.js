class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (nums.length <= 1) {
            return nums;
        }

        const mid = Math.floor(nums.length / 2);

        const left = nums.slice(0, mid);
        const right = nums.slice(mid);

        return this.merge(this.sortArray(left), this.sortArray(right))
    }

    merge(left, right) {
        let i = 0,
            j = 0;
        const result = [];
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i]);
                i++
            } else {
                result.push(right[j]);
                j++
            }
        }

        return [...result, ...left.slice(i), ...right.slice(j)];
    }
}
