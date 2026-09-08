class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const count = new Int32Array(3)
        for(const num of nums) {
            count[num]++
        }
        
        let idx = 0
        for (let i = 0; i < 3; i++ ) {
            while(count[i] > 0) {
                nums[idx] = i
                idx++
                count[i]--
            }
        }


  
    }
}
