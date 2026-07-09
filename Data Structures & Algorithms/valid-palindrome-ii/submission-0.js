class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        if (this.isPalindrone(s)) return true;

        for (let i = 0; i < s.length; i++) {
            const newStr = s.slice(0, i) + s.slice(i + 1);
            if (this.isPalindrone(newStr)) {
                return true;
            }
        }

        return false;
    }

    isPalindrone(s) {
        console.log(s)
        for (let i = 0; i < Math.floor(s.length / 2); i++) {
            if (s[i] !== s[s.length - 1 - i]) return false;
        }

        return true;
    }
}
