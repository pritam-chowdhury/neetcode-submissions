class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let i=0;
        let j=0;
        let result = []
        while(i<=nums1.length-1 && j<=nums2.length-1){
            if(nums1[i] <= nums2[j]){
                result.push(nums1[i]);
                i++;
            }else{
                 result.push(nums2[j]);
                 j++;
            }
        }
        result = result.concat(nums1.slice(i)).concat(nums2.slice(j));

        let mid = Math.floor((0 + result.length -1)/2);
        if(result.length % 2 != 0) return result[mid];
        return (result[mid] + result[mid+1])/2
    }
}
