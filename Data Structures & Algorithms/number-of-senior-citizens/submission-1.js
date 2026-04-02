class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let i = 12;

        let count = 0;

        for (let i = 0; i < details.length; i++){
            let subDetail = details[i].substring(11, 13);
            if (Number(subDetail) > 60) count++;
        }

        return count;

    }
}
