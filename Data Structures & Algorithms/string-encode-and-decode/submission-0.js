class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        let temp = ''
        const sizes = [];
        for (const str of strs) {
            sizes.push(str.length)
            temp += str
        }

        for (let size of sizes) {
            res += size + ','
        }

        res += '#'

        res += temp

        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        const sizes = [];
        let i = 0;

        while (str[i] !== '#') {
            let temp = ''
            while (str[i] !== ',') {
                temp += str[i];
                i++
            }
            sizes.push(parseInt(temp))
            i++
        }
        console.log(sizes)
        i++;
        for (const size of sizes) {
            res.push(str.substring(i, i + size))
            i += size
        }


        return res
    }
}
