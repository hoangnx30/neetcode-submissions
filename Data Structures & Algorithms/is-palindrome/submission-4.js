class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0,
            right = s.length - 1;

        console.log(!this.isAlphabet(s[6]));

        while (left < right) {
            while (left < right && !this.isAlphabet(s[left])) {
                
                left++;
            }

            while (right > left && !this.isAlphabet(s[right])) {
                right--;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    isAlphabet(c) {
        return (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
    }
}
