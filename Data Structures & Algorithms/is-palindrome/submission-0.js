class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !this.isAlphabet(s[left])) {
                left++
            }

            while (left < right && !this.isAlphabet(s[right])) {
                right--
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase())
                return false
            left++
            right--
        }

        return true

    }

    isAlphabet(c) {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')
    }
}
