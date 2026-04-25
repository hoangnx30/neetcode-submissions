class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let first = 1;
        let second = 1;

        for (let i = 0; i < n - 1; i++) {
            let temp = first
            first = first + second
            second = temp
        }

        return first
    }
}
