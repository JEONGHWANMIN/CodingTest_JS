class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str) => `${str.length}#${str}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let curIndex = 0;

        while (curIndex < str.length) {
            const secretCharIndex = str.indexOf("#", curIndex);
            const wordLength = Number(str.slice(curIndex, secretCharIndex));

            const word = str.slice(secretCharIndex + 1, secretCharIndex + 1 + wordLength);

            result.push(word);

            curIndex = secretCharIndex + 1 + wordLength;
        }

        return result;
    }
}
