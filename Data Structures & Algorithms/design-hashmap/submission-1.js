class MyHashMap {
    arr = new Array(1000001);
    constructor() {}

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.arr[key] = value;
        return null;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        return this.arr[key] ?? -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.arr[key] = null;
        return null;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
