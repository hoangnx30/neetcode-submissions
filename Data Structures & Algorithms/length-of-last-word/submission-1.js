class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let result = 0;
        let i = s.length - 1;
        while (s[i] === " " && i >= 0) {
            i--;
        }

        while (s[i] !== " " && i >= 0) {
            i--;
            result++;
        }

        return result;
    }
}
