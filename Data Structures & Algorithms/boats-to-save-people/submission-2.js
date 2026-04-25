class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b)=> a-b);
        let i=0;
        let j=people.length-1;
        let counter = 0;
        while(i<=j){
            if(people[j] + people[i]<=limit) i++;
            j--;
            counter ++;
        }
        return counter;
    }
}
