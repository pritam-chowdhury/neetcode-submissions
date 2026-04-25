class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
       let map = {};
        for(let i=0;i<numbers.length;i++){
            const value = target-numbers[i];
            if(map.hasOwnProperty(value)) return [map[value]+1,i+1];
            else{
                map[numbers[i]] = i;
            }
        }
        return [];
}
}