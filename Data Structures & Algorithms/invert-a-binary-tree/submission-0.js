/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        
        const helper = (node) => {
            
            if (!node) return null;

            let tempNode = node.left;
            node.left = helper(node.right);
            node.right = helper(tempNode);

            return node;
        }

        return helper(root);
    }
}
