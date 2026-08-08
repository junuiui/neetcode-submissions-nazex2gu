from typing import List

class Solution:

    def encode(self, strs: List[str]) -> str:
        """Encodes a list of strings to a single string."""
        encoded_string = ""
        for val in strs:
            # Append the length of the string, a delimiter, and the string itself
            encoded_string += f"{len(val)}#{val}"
        return encoded_string

    def decode(self, s: str) -> List[str]:
        """Decodes a single string to a list of strings."""
        decoded_strs = []
        i = 0
        
        while i < len(s):
            # Find where the delimiter '#' is to extract the length
            j = i
            while s[j] != '#':
                j += 1
            
            # Extract the length of the next string
            length = int(s[i:j])
            
            # Extract the actual string using the length
            # The string starts right after '#' (j + 1)
            start = j + 1
            end = start + length
            decoded_strs.append(s[start:end])
            
            # Move the pointer past the extracted string
            i = end
            
        return decoded_strs
