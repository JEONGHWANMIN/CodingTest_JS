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
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    const findDiameter = (node) => {
        if (!node) return 0;

        const leftLen = findDiameter(node.left)
        const rightLen = findDiameter(node.right)

        diameter = Math.max(diameter, leftLen + rightLen)

        return 1 + Math.max(leftLen, rightLen)
    }

    findDiameter(root)

    return diameter
};