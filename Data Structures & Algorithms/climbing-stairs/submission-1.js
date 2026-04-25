class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = new Array(n).fill(-1);
        return this.dfs(0, n, cache);
    }

    dfs(step, n, cache) {
        if (step > n) {
            return 0;
        }

        if (step == n) {
            return 1;
        }

        if (cache[step] !== -1) {
            return cache[step];
        }

        cache[step] = this.dfs(step + 1, n, cache) + this.dfs(step + 2, n, cache);
        return cache[step]
    }
}
