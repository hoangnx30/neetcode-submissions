class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();

        for (const stone of stones) {
            maxHeap.enqueue(stone);
        }

        while (maxHeap.size() > 1) {
            const smashed = Math.abs(maxHeap.dequeue() - maxHeap.dequeue());

            maxHeap.enqueue(smashed);
        }

        return maxHeap.front();
    }
}
