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
        let nodeSet = new Set();
        let curr = head;
        let counter = 0;
        while(curr.next){
            if(nodeSet.has(curr)) return true;
            nodeSet.add(curr);
            curr = curr.next;
        }
        return false;
    }

}
