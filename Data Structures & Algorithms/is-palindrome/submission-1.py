class Solution:
    def isPalindrome(self, s: str) -> bool:
        alphaNumeric = "".join(c for c in s if c.isalnum()).lower()
        i, j = 0, len(alphaNumeric) - 1

        while i < j:
            if alphaNumeric[i] is not alphaNumeric[j]:
                return False
            i += 1
            j -= 1

        return True