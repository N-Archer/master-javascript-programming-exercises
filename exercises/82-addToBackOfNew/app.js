// Write your function here


const addToBackOfNew = (array, number) => {
    let newArray = array.map(element => element);
        newArray.push(number);
    return newArray;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log("INPUT:", input); // --> [1, 2]
console.log("OUTPUT:", output); // --> [1, 2, 3]