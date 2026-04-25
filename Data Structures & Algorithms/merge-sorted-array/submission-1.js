class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
         let arr = [];
        let i=0;
        let j=0;
        let k=0;
        while(i<m && j<n){
            if(nums2[j]<= nums1[i]){
                arr[k] = nums2[j];
                j++;
            }else{
                arr[k] = nums1[i];
                i++;
            }
            k++;
        }
        arr = [...arr,...nums1.slice(i,m), ...nums2.slice(j)];
        for(let i=0;i<arr.length;i++){
          nums1[i] = arr[i];
        }
    }
}
