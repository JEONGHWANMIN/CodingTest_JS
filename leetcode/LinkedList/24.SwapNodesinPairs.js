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
var swapPairs = function (head) {
  if (!head) return head;

  let swap1 = [];
  let swap2 = [];
  let count = 1;

  while (head) {
    if (count % 2 === 0) {
      swap1.push(head.val);
    } else {
      swap2.push(head.val);
    }
    head = head.next;
    count++;
  }

  const totalSwap = [];

  while (swap1.length !== 0 && swap2.length !== 0) {
    const num1 = swap1.shift();
    const num2 = swap2.shift();

    totalSwap.push(num1);
    totalSwap.push(num2);
  }

  while (swap1.length !== 0) {
    const num = swap1.shift();
    totalSwap.push(num);
  }

  while (swap2.length !== 0) {
    const num = swap2.shift();
    totalSwap.push(num);
  }

  console.log(totalSwap);

  let singleList = new ListNode();
  const singleList1 = singleList;
  let len = 0;
  for (let num of totalSwap) {
    len++;
    singleList.val = num;
    if (len !== totalSwap.length) singleList.next = new ListNode();
    singleList = singleList.next;
  }

  return singleList1;
};
