/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  let isPreviousNode = false;
  const que = [root];

  while (que.length > 0) {
    const node = que.shift();

    if (!node) {
      isPreviousNode = true;
      continue;
    }

    if (isPreviousNode) return false;

    que.push(node.left, node.right);
  }

  return true;
};
