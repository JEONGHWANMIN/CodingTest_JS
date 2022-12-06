/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  const values = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  const midIdx = Math.floor(values.length / 2);

  const arr = values.slice(midIdx);

  let LN = new ListNode();
  const OLN = LN;
  while (arr.length) {
    const poped = arr.shift();
    LN.val = poped;
    if (arr.length === 0) break;
    LN.next = new ListNode();
    LN = LN.next;
  }

  return OLN;
};
