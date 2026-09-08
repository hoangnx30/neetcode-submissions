class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (nums.length < 2) {
            return nums;
        }

        const left = 0;
        const right = nums.length;
        const mid = Math.floor((left + right) / 2);

        return this.merge(
            this.sortArray(nums.slice(0, mid)),
            this.sortArray(nums.slice(mid, right)),
        );
    }

    merge(left, right) {
        let i = 0;
        let j = 0;

        const result = []
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i])
                i++
            }

            if (left[i] > right[j]) {
                result.push(right[j])
                j++
            }
        }


        for (let idx = i; idx < left.length; idx++) {
            result.push(left[idx])
        }

        for (let idx = j; idx < right.length; idx++) {
            result.push(right[idx])
        }

        return result
    }
}
