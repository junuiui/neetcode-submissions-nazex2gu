class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        """
        Thought Process:
            1. trim
            2. split by " "
            3. get the last length
        """

        return len(s.strip().split(" ").pop())
