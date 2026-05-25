class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const map = new Map();

        for (const item of arr) {
            map.set(item, (map.get(item) || 0) + 1);
        }

        let count = 0;
        console.log(map)
        for (const key of map.keys()) {

            if (map.get(key) === 1) {
                count++;
            }

            if (count == k) {
                
                return key;
            }
        }

        return ""
    }
}
