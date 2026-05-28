class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        const countText = new Map();

        for (const c of text) {
            countText.set(c, (countText.get(c) || 0) + 1);
        }

        const balloon = { b: 1, a: 1, l: 2, o: 2, n: 1 };

        let result = text.length;
        for (const c in balloon) {
            console.log(countText.get(c), balloon[c])
            result = Math.min(result, Math.floor((countText.get(c) || 0) / balloon[c]));
        }

        return result
    }
}
