// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let curr = head;
        let map = new Map();
        map.set(null, null);
        while(curr){
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }
        curr = head;
        while(curr){
            let node = map.get(curr);
            node.next = map.get(curr.next);
            node.random = map.get(curr.random);
            curr = curr.next;
        }
    return map.get(head);
    }
}
