class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let result = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            if (map.has(s[r])) {
                l = Math.max(l, map.get(s[r]) + 1);
            }
            map.set(s[r], r)
            result = Math.max(result, r - l + 1);
        }

        return result;
    }
}
