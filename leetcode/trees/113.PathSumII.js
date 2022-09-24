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
 * @param {number} targetSum
 * @return {number[][]}
 */

var pathSum = function (root, targetSum) {
  const result = [];

  if (!root) return result;

  const dfs = (node, temp) => {
    if (!node.left && !node.right) {
      const arr = [...temp, node.val];
      if (arraySum(arr) === targetSum) result.push(arr);
      return;
    }

    if (node.left) dfs(node.left, [...temp, node.val]);
    if (node.right) dfs(node.right, [...temp, node.val]);
  };

  dfs(root, []);

  return result;
};

const arraySum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur);
};
