class FreqStack {
    constructor() {
        this.count = 0;
        this.countStk = {};
        this.maxCount = 0;
        this.map = {};
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.map[val] =  (this.map[val] || 0) + 1;
        if(!this.countStk[this.map[val]]){
            this.countStk[this.map[val]] = [];
        }
        this.maxCount = Math.max(this.map[val],this.maxCount);
        this.countStk[this.map[val]].push(val);

    }

    /**
     * @return {number}
     */
    pop() {
        const res = this.countStk[this.maxCount].pop();
        this.map[res]--;
        if(this.countStk[this.maxCount].length ==0){
            this.maxCount --;
        }
        return res;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
