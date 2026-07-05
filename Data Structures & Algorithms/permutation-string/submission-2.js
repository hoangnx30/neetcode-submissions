class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const countS1 = Array(26).fill(0);
        const countS2 = Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            countS1[s1.charCodeAt(i) - 97]++;
            countS2[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;

        for (let i = 0; i < 26; i++) {
            if (countS1[i] === countS2[i]) {
                matches++;
            }
        }

        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            if (matches === 26) {
                return true;
            }

            const pos = s2.charCodeAt(right) - 97;
            countS2[pos]++;
            if (countS2[pos] === countS1[pos]) {
                matches++;
            } else if ((countS2[pos] === countS1[pos] + 1)) {
                matches--;
            }

            const posLeft = s2.charCodeAt(left) - 97;
            countS2[posLeft]--;
            if (countS2[posLeft] === countS1[posLeft]) {
                matches++;
            } else if (countS2[posLeft] === countS1[posLeft] - 1) {
                matches--;
            }
            left++;
        }

        return matches == 26;
    }
}
