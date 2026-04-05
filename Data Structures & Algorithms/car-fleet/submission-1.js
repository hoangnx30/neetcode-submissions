class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pairs = position.map((p, i) => [p, speed[i]]).sort((a, b) => b[0] - a[0])
        console.log(pairs)

        let result = 0
        let prevTime = null
        for (const [position, speed] of pairs) {
            const time = (target - position) / speed
            if (prevTime === null) {
                prevTime = time
                result++
            }

            if (prevTime && prevTime < time) {
                prevTime = time
                result++
            }

        }

        return result
    }
}
