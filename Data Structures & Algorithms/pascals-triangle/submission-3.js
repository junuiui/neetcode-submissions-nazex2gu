class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {

        if (numRows === 0) return [];
        if (numRows === 1) return [[1]];
        // if (numRows === 2) return [[1], [1,1]];

        const result = [[1]];

        for (let i = 2; i <= numRows; i++) {
            console.log(i);
            const arr = new Array(i).fill(1);

            for (let j = 1; j < i-1; j++) {
                arr[j] = result[i-2][j-1] + result[i-2][j]
            }

            result.push(arr);
        }

        return result;
    }
}
