class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {}
        for (const str of strs) {
            const sortedStr = str.split('').sort().join('')
            console.log(sortedStr)
            if (!result[sortedStr]) {
                result[sortedStr] = [str]
            } else {
                result[sortedStr].push(str)
            }
        }

        return Object.values(result)

    }
}
