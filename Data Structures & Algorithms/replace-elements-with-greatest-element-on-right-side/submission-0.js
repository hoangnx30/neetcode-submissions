class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            let rightMax = -1;
            for (let j = i + 1; j < arr.length; j++) {
                rightMax = Math.max(rightMax, arr[j]);
            }

            arr[i] = rightMax;
        }
        arr[arr.length - 1] = -1;

        return arr;
    }
}
