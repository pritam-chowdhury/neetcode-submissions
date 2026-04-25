/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) {
            return null;
        }
        while(lists.length>1){
            let mergedList = [];
            for(let i=0;i<lists.length;i=i+2){
               let list1 = lists[i];
               let list2 = i + 1 < lists.length ? lists[i+1]: null;
               mergedList.push(this.mergeLists(list1,list2));
            }
            lists = mergedList;
        }
        return lists[0];

       
    }
    mergeLists(l1,l2){
            let dummy = new ListNode(0);
            let curr = dummy;
            while(l1 && l2){
                if(l1.val < l2.val){
                    curr.next=l1;
                    l1 = l1.next;
                }else{
                    curr.next = l2;
                    l2 = l2.next;
                }
                curr = curr.next;
            }
            if(l1)
                curr.next = l1;
            else
                curr.next = l2;
            return dummy.next;
        }
}
