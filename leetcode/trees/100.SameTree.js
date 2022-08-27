/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const DFS = (p, q) => {
    if ((p && !q) || (q && !p) || (p && q && p.val !== q.val)) return false;
    if (p && q) return DFS(p.left, q.left) && DFS(p.right, q.right);
    return true;
  };

  return DFS(p, q);
};
