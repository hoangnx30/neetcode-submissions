class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left = 0,
            right = s.length - 1;
        while (left < right) {
            if (s[left] === s[right]) {
                left++;
                right--;
                continue;
            }

            return (
                this.isPalindroneV2(s, left + 1, right) || this.isPalindroneV2(s, left, right - 1)
            );
        }

        return true;
    }

    isPalindrone(s) {
        for (let i = 0; i < Math.floor(s.length / 2); i++) {
            if (s[i] !== s[s.length - 1 - i]) return false;
        }

        return true;
    }

    isPalindroneV2(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
