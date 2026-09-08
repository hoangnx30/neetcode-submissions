class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const freq =  Array.from({length: nums.length + 1}, () => [])


        for (const num of nums) {
            if (!count[num]) {
                count[num] = 0;
            }
            count[num]++;
        }

    
        for (const num in count) {
            const appearance = count[num];

            freq[appearance].push(Number(num));
        }

        const result = []

        for (let i = freq.length - 1; i >= 0; i--) {
            for (const num of freq[i]) {
                result.push(num)

                if (result.length === k) {
                    return result
                }
            }
        }
        

        return result;
    }
}
