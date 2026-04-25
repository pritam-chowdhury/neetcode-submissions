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
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head) return false;
        if(!head.next) return false;
        let sp = head;
        let fp = head.next.next;
        while(fp && fp.next){
            if(sp == fp) return true;
            sp= sp.next;
            fp = fp.next.next;
        }
        return false;
    }

}
