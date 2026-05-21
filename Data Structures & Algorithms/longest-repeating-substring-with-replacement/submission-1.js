class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let result = 0;

        for (let i = 0; i < s.length; i++) {
            const map = new Map();
            let maxFrequency = 0;
            for (let j = i; j < s.length; j++) {
                map.set(s[j], (map.get(s[j]) || 0) + 1);
                maxFrequency = Math.max(maxFrequency, map.get(s[j]));

                if (j - i + 1 - maxFrequency <= k) {
                    result = Math.max(result, j - i + 1);
                }
            }
        }
        return result;
    }
}
