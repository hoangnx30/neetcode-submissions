class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    valid(s) {
        let sum = 0
        for (const c of s) {
            sum += c === '(' ? 1 : -1
            if (sum < 0) return false
        }

        return sum === 0
    }

    /**
     * @param {string} s
     * @param {string[]}
     * @param {number} n
     */
    dfs(s, res, n) {
        if (s.length === n * 2) {
            if (this.valid(s)) {
                res.push(s)
            }
            return
        }

        this.dfs(s + '(', res, n)
        this.dfs(s + ')', res, n)
    }

    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = []
        this.dfs('', result, n)
        return result
    }
}