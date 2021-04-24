// Write your function here

const getIndexOf = (char, string) => {
    for(let i = 0; i < string.length; i++) {
        if(string[i] == char) return i;
    }
    return -1;
}

// const getIndexOf = (char, string) => {
//     let idx = null;
//     string.split("").map((elm, index) => {
//         if(elm == char) idx = index;
//     })
//     return idx;
// }

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2