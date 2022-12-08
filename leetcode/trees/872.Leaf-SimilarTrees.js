/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
  const leaf1 = []
  const leaf2 = []

  const dfs = (node,arr) => {
      if (!node.left && !node.right) {
          arr.push(node.val)
          return arr
      }

      if (node.left) dfs(node.left,arr)
      if (node.right) dfs(node.right,arr)
      
      return arr
  }

  const a = dfs(root1,leaf1)
  const b = dfs(root2,leaf2)

 return String(a) === String(b)
};