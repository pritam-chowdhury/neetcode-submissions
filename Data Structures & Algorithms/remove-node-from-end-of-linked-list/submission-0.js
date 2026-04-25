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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if(n<=0) return head;
        
        let prev = new ListNode();
        prev.next = head;
        let fp = head;
        let sp = prev;
        while(n>0){
            fp = fp.next;
            n--;
        }
        while(fp){
            sp=sp.next;
            fp = fp.next;
        }
        sp.next = sp.next.next;
         return prev.next;

    }
}
