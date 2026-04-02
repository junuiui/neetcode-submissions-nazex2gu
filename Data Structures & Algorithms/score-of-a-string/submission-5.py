class Solution:
    def scoreOfString(self, s: str) -> int:
        sum: int = 0
        chars: list = list(s)
        for i in range(len(chars) - 1):
            sum += abs((ord(chars[i]) - ord(chars[i+1])))
            
        return sum