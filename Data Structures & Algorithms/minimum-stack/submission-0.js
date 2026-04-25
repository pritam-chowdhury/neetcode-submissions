class MinStack {
    constructor() {
        this.stk = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let minValue = this.stk.length ? Math.min(this.stk[this.stk.length-1].minValue, val) : val;
        this.stk.push({val,minValue})
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stk.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stk[this.stk.length - 1].val;
    }

    /**
     * @return {number}
     */
    getMin() {
        let top = this.stk[this.stk.length -1];
        return top.minValue;
    }
}
