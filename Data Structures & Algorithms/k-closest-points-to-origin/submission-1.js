class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const map = {};

        const result = [];

        for (const point of points) {
            const length = Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));

            if (map[length] === undefined) {
                map[length] = [];
            }

            map[length].push(point);
        }

        const minPriorityQueue = new MinPriorityQueue();

        for (const length of Object.keys(map)) {
            minPriorityQueue.enqueue(Number(length));
        }

        while (result.length < k && minPriorityQueue.size() > 0) {
            const minLength = minPriorityQueue.dequeue();
            const points = map[minLength];

            let i = 0;
            while (result.length < k && i < points.length) {
                result.push(points[i]);
                i++;
            }
        }

        return result;
    }
}
