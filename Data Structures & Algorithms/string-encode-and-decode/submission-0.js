class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        for (const str of strs) {
            encoded += str.length + '#' + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            // '#' 전까지 숫자 읽기 (length)
            let j = i;
            while (str[j] !== '#') j++;
            const len = parseInt(str.slice(i, j));

            // 길이만큼 문자열 읽기
            const s = str.slice(j + 1, j + 1 + len);
            result.push(s);

            // 다음 문자열 시작 위치
            i = j + 1 + len;
        }

        return result;
    }
}
