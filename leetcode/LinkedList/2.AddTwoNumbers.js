/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let list = new ListNode();
  let original = list;
  let carry = 0;

  while (l1 || l2 || carry) {
    let val1 = 0;
    let val2 = 0;

    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    }

    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    }

    let sum = val1 + val2 + carry;

    carry = sum >= 10 ? 1 : 0;
    sum = sum >= 10 ? sum - 10 : sum;

    list.next = new ListNode(sum);
    list = list.next;
  }
  original = original.next;
  return original;
};
