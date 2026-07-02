class LinkedList {
    list = [];
    constructor() {}

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.list.length || !this.list.length) {
            return -1;
        }
        return this.list[index];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        this.list = [val, ...this.list];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.list.push(val);
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index >= 0 && index < this.list.length) {
            this.list = this.list.slice(0, index).concat(this.list.slice(index + 1));

            return true;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        return this.list;
    }
}
