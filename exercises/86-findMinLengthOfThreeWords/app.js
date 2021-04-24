// Write your function here

const findMinLengthOfThreeWords = (word1, word2, word3) => {
    let shortest = word1;
    if(word1.length > word2.length) shortest = word2;
    if(word2.length > word3.length) shortest = word3;
    return shortest.length;
}


var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1