class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @returns {number[][]}
   */
  combinationSum(nums, target) {
    let res = [];

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
        curr.push(nums[idx]);   // choose
        dfs(idx, curr);     // explore (no reuse)
        curr.pop();             // undo
      }
    }

    dfs(0, []);
    return res; // ✅ return result
  }
}