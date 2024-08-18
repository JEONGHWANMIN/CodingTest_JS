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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const results = []

    const treverseInOrder = (node) => {
        if (!node || results.length >= k) return

        treverseInOrder(node.left)
        results.push(node.val)
        treverseInOrder(node.right)
    }

    treverseInOrder(root)

    return results[k-1]
};