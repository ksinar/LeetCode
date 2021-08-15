/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let combined1;
        let combined2;
        for(let i = 0; i < word1.length; i++){
            combined1 += word1[i];
        }
        for(let j = 0; j < word2.length; j++){
            combined2 += word2[j];
        }
        if(combined1 == combined2){
            return true;
        }
        return false;
};