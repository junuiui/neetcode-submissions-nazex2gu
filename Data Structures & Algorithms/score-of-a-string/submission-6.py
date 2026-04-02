class Solution:
    def scoreOfString(self, s: str) -> int:
        sum: int = 0
        for i in range(len(s) - 1):
            sum += abs((ord(s[i]) - ord(s[i+1])))
            
        return sum