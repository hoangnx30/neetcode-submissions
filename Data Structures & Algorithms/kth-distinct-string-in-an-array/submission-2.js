class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const distinct = new Set();
        const seen = new Set();

        for (const s of arr) {
            if (distinct.has(s)) {
                distinct.delete(s)
                seen.add(s);
            } else if (!seen.has(s)) {
                distinct.add(s)
            }
        }

        for (const s of arr){
            if (distinct.has(s)) {
                k--
                if (k ===0){
                    return s
                }
            }
        }

        return ""
    }
}
