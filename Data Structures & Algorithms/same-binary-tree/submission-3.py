# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def serialize(self, p: Optional[TreeNode]) -> list:
        """Encodes a tree to a single string."""
        def dfs(node):
            if not node:
                res.append("None")
                return
            res.append(str(node.val))
            dfs(node.left)
            dfs(node.right)
        
        res = []
        dfs(p)

        return res

    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        # Solution 1
        # if not p and not q:
        #     return True
        
        # if not p or not q or p.val != q.val:
        #     return False
        
        # return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)

        p_str = self.serialize(p)
        q_str = self.serialize(q)

        return p_str == q_str
    
    