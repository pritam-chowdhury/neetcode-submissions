class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */

    //[1,2,4,5]
    //[1,2,2,3,3]
    numRescueBoats(people, limit) {
        people.sort((a,b)=> a-b);
        let l=0
        let r = people.length -1;
        let res = 0;
        while(l<=r){
            let remain = limit - people[r];
            r--;
            res++;
            if(l <= r && people[l] <= remain){
                l++;
            }
        }
        return res;
    }
}
