/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }left->0
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
       let left = new ListNode(0);
       let curr = head;
       while(curr){
        if(!left.next) left.next = new ListNode(curr.val);
        else{
            let temp = left.next
            left.next = new ListNode(curr.val);
            left.next.next = temp;
        }
        curr = curr.next;
       }
       return left.next;
    }
}
