function myFilterFunction(word_array, callback) {
    
    let filterArray = [];
    for (let word of word_array) {
        if (callback(word)) {
            filterArray.push(word);
        }
    }
    return filterArray;

}
function isSixLetters(word) {
    return word.length === 6;
}
let output = myFilterFunction(["apples", "banana", "grapes", "orange", "kiwi", "pear"], isSixLetters);
console.log(output);