class Solution:
    def scoreOfString(self, s: str) -> int:
        """
        Thought Process:
            1. Started from the second element
            2. get the diff then add into result
        """

        result = 0

        for i in range(1, len(s)):
            result += abs((ord(s[i]) - ord(s[i-1])))
        
        return result