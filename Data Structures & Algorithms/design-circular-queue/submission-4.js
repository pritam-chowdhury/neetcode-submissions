class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.queue = new Array(k);
        this.size = 0;
        this.frontIndex = 0;
        this.rearIndex = -1;
        this.capacity = k;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if(this.isFull()) return false;
        this.rearIndex = (this.rearIndex+1)%this.capacity;
        this.queue[this.rearIndex] = value;
        this.size ++;
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if(this.isEmpty()) return false;
        this.frontIndex = (this.frontIndex + 1) % this.capacity;
        this.size--;
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        return this.isEmpty() ? -1 : this.queue[this.frontIndex];
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.isEmpty() ? -1 : this.queue[this.rearIndex];
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size ==0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.size == this.capacity;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
