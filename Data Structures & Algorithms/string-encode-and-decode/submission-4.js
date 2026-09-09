class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (const str of strs) {
            encoded += `${str.length}#${str}`;
        }
        
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];

        let idx = 0;
        while (idx < str.length) {
            let idx1 = idx;
            while (str[idx1] !== "#") {
                idx1++;
            }

            const num = Number(str.substring(idx, idx1));
            result.push(str.substring(idx1 + 1, idx1 + 1 + num));
            idx = idx1 + 1 + num;
        }

        return result
    }
}
