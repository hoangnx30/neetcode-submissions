class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        return s.trim().split(" ")[s.trim().split(" ").length - 1].length;
    }
}
