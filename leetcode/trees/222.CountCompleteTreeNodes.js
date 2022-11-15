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
 * @return {number}
 */
var countNodes = function (root) {
  let count = 0;
  const dfs = (node) => {
    count = count + 1;
    if (!node) {
      return;
    }

    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  };

  if (root) dfs(root);

  return count;
};
