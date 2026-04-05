class Solution {

    backtrack(s, result, openN, closeN, n) {
        if (s.length === n * 2 && openN === closeN) {
            result.push(s)
            return
        }

        if (openN < n) {
            this.backtrack(s + '(', result, openN + 1, closeN, n)
        }

        if (closeN < openN) {
            this.backtrack(s + ')', result, openN, closeN + 1, n)

        }
    }

    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = []
        this.backtrack('', result, 0, 0, n)

        return result;
    }
}