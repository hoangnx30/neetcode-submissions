class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};

        for (const str of strs) {
            const count = new Array(26).fill(0);

            for (const c of str) {
                count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            console.log(count);

            const key = count.join("-");

            if (!result[key]) {
                result[key] = [];
            }

            result[key].push(str);
        }

        return Object.values(result);
    }
}
