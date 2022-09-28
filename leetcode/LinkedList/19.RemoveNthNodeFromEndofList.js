/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let headCopy = head;

  let nums = [];
  let totalLen = 0;

  while (headCopy) {
    totalLen++;
    nums.push(headCopy.val);
    headCopy = headCopy.next;
  }

  if (totalLen === 1) return new ListNode().next;

  const find_idx = totalLen - n;

  nums.splice(find_idx, 1);

  let newListNode = new ListNode();
  let copyNewListNode = newListNode;
  count = 0;

  while (nums.length > 0) {
    const value = nums.shift();
    newListNode.val = value;
    if (count === totalLen - 2) break;
    newListNode.next = new ListNode();
    newListNode = newListNode.next;
    count++;
  }

  return copyNewListNode;
};
