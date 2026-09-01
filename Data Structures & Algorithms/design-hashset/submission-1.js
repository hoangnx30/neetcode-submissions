class MyHashSet {
    constructor() {
        this.data = new Array(1000001);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.data[key] = true;
        return null;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.data[key] = false;
        return null
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return !!this.data[key]
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
