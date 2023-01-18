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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  if (!root) return result;

  const que = [root];

  while (que.length) {
    const temp = [];
    const len = que.length;
    for (let i = 0; i < len; i++) {
      const poped = que.shift();
      temp.push(poped.val);

      if (poped.left) que.push(poped.left);
      if (poped.right) que.push(poped.right);
    }

    result.push(temp);
  }

  return result;
};
