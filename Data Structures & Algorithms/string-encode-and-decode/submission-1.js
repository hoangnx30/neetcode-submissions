class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        const sizes = [];
        let temp = "";

        for (const str of strs) {
            sizes.push(str.length);
            temp += str;
        }

        for (let size of sizes) {
            res += size + ",";
        }

        res += "#";
        res += temp;

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let sizes = [];
        let i = 0;

        while (str[i] != "#") {
            let current = "";
            while (str[i] != ",") {
                current += str[i];
                i++;
            }
            sizes.push(parseInt(current));
            i++;
        }

        i++; // drop "#" character
        console.log(i, sizes, str);
        for (let size of sizes) {
            result.push(str.slice(i, i + size));
            i += size;
        }

        return result;
    }
}
