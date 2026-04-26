class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(nums, target) {
         let res = [];
         nums.sort((a,b)=> a-b)
    function sum(arr) {
      let s = 0;
      for (let i = 0; i < arr.length; i++) {
        s += arr[i];
      }
      return s; // ✅ return value
    }

    function dfs(i, curr) {
      let currSum = sum(curr);

      // ✅ found
      if (currSum === target) {
        res.push([...curr]);
        return;
      }

      // ✅ stop early (pruning)
      if (currSum > target || i >= nums.length) {
        return;
      }

      for (let idx = i; idx < nums.length; idx++) {
         if (idx > i && nums[idx] === nums[idx - 1]) continue;

        curr.push(nums[idx]);   // choose
        dfs(idx+1, curr);     // explore (no reuse)
        curr.pop();             // undo
      }
    }

    dfs(0, []);
    return res; // ✅ return result
  
    }
}
