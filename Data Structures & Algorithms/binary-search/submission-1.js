class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // search(nums, target) {
    //     return this.binarySearch(nums, 0, nums.length - 1, target)
    // }

    // binarySearch(nums, left, right, target) {
    //     if (left > right) {
    //         return -1
    //     }

    //     const mid = Math.floor((right + left) / 2)

    //     if (nums[mid] === target) {
    //         return mid
    //     }


    //     if (nums[mid] > target) {
    //         return this.binarySearch(nums, left, mid - 1, target)
    //     }

    //     return this.binarySearch(nums, mid + 1, right, target)

    // }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)

            if (nums[mid] === target) {
                return mid
            }

            console.log(left, right)

            if (nums[mid] < target) {
                left = mid + 1
                continue
            }

            if (nums[mid] > target) {
                right = mid - 1
                continue
            }
        }

        return -1
    }
}