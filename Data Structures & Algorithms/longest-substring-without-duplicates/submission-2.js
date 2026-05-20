class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let result = 0;
        for (let i = 0; i < s.length; i++) {
            const set = new Set();
            for (let j = i; j < s.length; j++) {
                if (!set.has(s[j])) {
                    set.add(s[j]);
                } else {
                    result = Math.max(set.size, result);
                    break;
                }
            }

            result = Math.max(set.size, result);
        }

        return result;
    }
}
