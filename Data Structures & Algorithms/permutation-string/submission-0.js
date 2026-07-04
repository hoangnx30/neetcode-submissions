class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const countS1 = Array(26).fill(0);

        for (const s of s1) {
            const pos = s.charCodeAt() - 97;
            countS1[pos]++;
        }

        let left = 0;
        let countS2 = Array(26).fill(0);
        for (let right = 0; right < s2.length; right++) {
            const pos = s2[right].charCodeAt() - 97;
            countS2[pos]++;
            if (right - left + 1 === s1.length) {
                if (this.isTwoArrayEquals(countS1, countS2)) {
                    return true;
                } else {
                    const posLeft = s2[left].charCodeAt() - 97;

                    countS2[posLeft]--;
                    left++;
                }
            }
        }
        return false;
    }

    isTwoArrayEquals(arr1, arr2) {
        console.log(arr2);
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    }
}
