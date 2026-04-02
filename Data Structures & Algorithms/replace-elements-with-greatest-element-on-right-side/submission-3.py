class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        
        # Last element is always -1
        maxStore = -1

        for i in range(len(arr)-1, -1, -1):
            currMax = max(maxStore, arr[i])

            arr[i] = maxStore

            maxStore = currMax


        return arr