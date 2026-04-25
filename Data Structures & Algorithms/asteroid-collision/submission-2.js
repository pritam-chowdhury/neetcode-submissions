class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stk = [];
        for(let a of asteroids){
            while(stk.length && a<0 && stk[stk.length-1] >0){
                let item = stk[stk.length-1];
                if(Math.abs(a) > Math.abs(item)){
                    stk.pop();
                }else if(Math.abs(a) == Math.abs(item)){
                    stk.pop();
                    a=0;
                }else {
                    a=0;
                }
            }
            if(a !== 0){
                stk.push(a);
            }
        }
        return stk;
    }
}
