class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        let n = arr.length;
        if (n < 2) return [-1];

        let max = arr[n - 1];

        for (let i = n - 1; i >= 0; i--){
            let curr = Math.max(arr[i], max);
            arr[i] = max;
            max = Math.max(arr[i], curr);
        }

        arr[n - 1] = -1;

        return arr;
    }
}
